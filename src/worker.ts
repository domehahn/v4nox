export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Health and artist metadata API endpoint on Cloudflare Edge
    if (url.pathname === "/api/artist") {
      return Response.json(
        {
          artist: "v4nox",
          creator: "Dominik Hahn (@dome_hahn)",
          sunoProfile: "https://suno.com/@dome_hahn",
          domain: "v4nox.eu",
          engine: "Suno AI Audio Synthesis + Cloudflare Workers Edge",
          status: "online",
        },
        {
          headers: {
            "Cache-Control": "public, max-age=3600",
            "X-Content-Type-Options": "nosniff",
          },
        }
      );
    }

    // Serve static assets with security headers
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
} satisfies ExportedHandler<Env>;
