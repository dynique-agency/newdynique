import { Env } from "./_shared";

function htmlResponse(body: string, status = 200): Response {
  return new Response(
    `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dynique — status</title>
<style>body{font-family:system-ui,sans-serif;background:#0a0a0a;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:2rem}
p{font-size:1.1rem;font-weight:300;letter-spacing:0.02em}
.ok{color:#d4a574}</style></head>
<body><p>${body}</p></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

// Bezoek deze URL met ?key=<STATUS_SECRET> (bookmark 'm op je telefoon) vlak nadat je
// een lead persoonlijk hebt beantwoord — dat is wat de live "laatst gereageerd"-indicator voedt.
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!env.STATUS_SECRET || key !== env.STATUS_SECRET) {
    return htmlResponse("Ongeldige of ontbrekende sleutel.", 403);
  }
  if (!env.DYNIQUE_KV) {
    return htmlResponse("KV-namespace niet gekoppeld — zie docs/LEADCAPTURE-SETUP.md.", 500);
  }

  await env.DYNIQUE_KV.put("lastRespondedAt", new Date().toISOString());

  return htmlResponse('<span class="ok">✓</span> Status bijgewerkt — bedankt.');
};
