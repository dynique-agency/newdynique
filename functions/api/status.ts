import { Env, jsonResponse } from "./_shared";

const STALE_AFTER_MS = 48 * 60 * 60 * 1000; // 48 uur

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;

  if (!env.DYNIQUE_KV) {
    return jsonResponse({ lastRespondedAt: null });
  }

  const stored = await env.DYNIQUE_KV.get("lastRespondedAt");
  if (!stored) {
    return jsonResponse({ lastRespondedAt: null });
  }

  const age = Date.now() - new Date(stored).getTime();
  if (Number.isNaN(age) || age > STALE_AFTER_MS) {
    return jsonResponse({ lastRespondedAt: null });
  }

  return jsonResponse({ lastRespondedAt: stored });
};
