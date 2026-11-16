export class SunoAudioEngine {
  constructor() {
    // Standard HTML5 video/audio element plays unencrypted Suno MP4 (H.264/AAC) with full CORS support
    this.media = document.createElement("video");
    this.media.preload = "metadata";
    this.media.crossOrigin = "anonymous";
    this.media.playsInline = true;
    this.media.style.display = "none";
    document.body.appendChild(this.media);

    this.ctx = null;
    this.analyser = null;
    this.sourceNode = null;

    this.isPlaying = false;
    this.currentTrack = null;
    this.onStateChange = null;
    this.onTick = null;
    this.onEnded = null;
    this.phase = 0;

    this.media.addEventListener("timeupdate", () => {
      if (this.onTick) {
        const dur =
          Number.isFinite(this.media.duration) && this.media.duration > 0
            ? this.media.duration
            : this.currentTrack?.durationSeconds || 240;
        this.onTick(this.media.currentTime, dur);
      }
    });

    this.media.addEventListener("play", () => {
      this.isPlaying = true;
      this.initWebAudioAnalyser();
      this.notifyState();
    });

    this.media.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notifyState();
    });

    this.media.addEventListener("ended", () => {
      this.isPlaying = false;
      this.notifyState();
      if (this.onEnded) {
        this.onEnded();
      }
    });
  }

  initWebAudioAnalyser() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 128;
        this.analyser.smoothingTimeConstant = 0.8;
        this.sourceNode = this.ctx.createMediaElementSource(this.media);
        this.sourceNode.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    } catch {
      // Fallback if Web Audio binding fails
    }
  }

  notifyState() {
    if (this.onStateChange && this.currentTrack) {
      this.onStateChange(this.currentTrack, this.isPlaying);
    }
  }

  playTrack(track) {
    if (!track) return;
    const isSame = this.currentTrack && this.currentTrack.id === track.id;

    if (isSame && this.media.src) {
      if (this.isPlaying) {
        this.media.pause();
      } else {
        this.media.play().catch((err) => console.error("Play error:", err));
      }
      return;
    }

    this.currentTrack = track;
    this.media.src = track.audioUrl; // https://cdn1.suno.ai/<id>.mp4 (standard unencrypted AAC/MP4)
    this.media.currentTime = 0;
    this.media
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notifyState();
      })
      .catch((err) => {
        console.error("Playback failed:", err);
        this.isPlaying = false;
        this.notifyState();
      });
  }

  selectTrackWithoutAutoplay(track) {
    if (!track) return;
    this.currentTrack = track;
    this.media.src = track.audioUrl;
    this.isPlaying = false;
    this.notifyState();
  }

  pause() {
    this.media.pause();
  }

  seek(ratio) {
    const dur =
      Number.isFinite(this.media.duration) && this.media.duration > 0
        ? this.media.duration
        : this.currentTrack?.durationSeconds || 240;
    this.media.currentTime = Math.max(0, Math.min(dur, ratio * dur));
    if (this.onTick) {
      this.onTick(this.media.currentTime, dur);
    }
  }

  setVolume(val) {
    this.media.volume = Math.max(0, Math.min(1, val));
  }

  getFrequencyData() {
    if (!this.isPlaying || !this.currentTrack) {
      return null;
    }
    if (this.analyser) {
      const data = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(data);
      const sum = data.reduce((a, b) => a + b, 0);
      if (sum > 0) return data;
    }

    // Fallback rhythmic visualizer synced to song BPM
    this.phase += 0.14;
    const bpm = this.currentTrack.bpm || 126;
    const beatPulse = Math.pow(
      Math.abs(Math.sin((this.media.currentTime * bpm * Math.PI) / 60)),
      3
    );
    const bins = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
      const bassBoost = i < 12 ? beatPulse * 115 : 0;
      const midWave =
        Math.sin(this.phase + i * 0.35) * 45 +
        Math.cos(this.phase * 0.7 - i * 0.2) * 35;
      bins[i] = Math.min(255, Math.max(18, 95 + bassBoost + midWave));
    }
    return bins;
  }
}
