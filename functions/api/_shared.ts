export interface Env {
  RESEND_API_KEY: string;
  LEAD_TO_EMAIL?: string;
  STATUS_SECRET: string;
  DYNIQUE_KV: KVNamespace;
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
