import { Env, jsonResponse } from "./_shared";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  description?: string;
  source?: string;
  appointment?: { date?: string; time?: string; type?: string };
}

const SOURCE_LABELS: Record<string, string> = {
  homepage: "de homepage",
  contact: "de contactpagina",
  checklist: "de gratis checklist",
};

function esc(v?: string): string {
  if (!v) return "";
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderLeadHtml(b: LeadPayload): string {
  const rows: string[] = [];
  rows.push(`<p><strong>Naam:</strong> ${esc(b.name)}</p>`);
  if (b.company) rows.push(`<p><strong>Bedrijf:</strong> ${esc(b.company)}</p>`);
  if (b.email) rows.push(`<p><strong>E-mail:</strong> ${esc(b.email)}</p>`);
  if (b.phone) rows.push(`<p><strong>Telefoon:</strong> ${esc(b.phone)}</p>`);
  if (b.projectType) rows.push(`<p><strong>Dienst:</strong> ${esc(b.projectType)}</p>`);
  if (b.description) {
    rows.push(`<p><strong>Omschrijving:</strong><br>${esc(b.description).replace(/\n/g, "<br>")}</p>`);
  }
  if (b.appointment?.date) {
    const type = b.appointment.type === "online" ? "Online" : "Fysiek";
    rows.push(`<p><strong>Gewenst gesprek:</strong> ${esc(b.appointment.date)} ${esc(b.appointment.time || "")} (${type})</p>`);
  }
  const sourceLabel = SOURCE_LABELS[b.source || ""] || "de website";
  rows.push(`<p style="color:#888;font-size:12px;margin-top:24px;">Verzonden via ${sourceLabel} op dynique.nl</p>`);
  return `<div style="font-family:sans-serif;line-height:1.6;">${rows.join("\n")}</div>`;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "invalid_json" }, 400);
  }

  if (!body.name || !body.name.trim()) {
    return jsonResponse({ ok: false, error: "missing_name" }, 400);
  }
  if (!body.email && !body.phone) {
    return jsonResponse({ ok: false, error: "missing_contact" }, 400);
  }
  if (!env.RESEND_API_KEY) {
    return jsonResponse({ ok: false, error: "not_configured" }, 500);
  }

  const to = env.LEAD_TO_EMAIL || "info@dynique.nl";

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Dynique Website <formulier@dynique.nl>",
      to: [to],
      reply_to: body.email || undefined,
      subject: `Nieuwe aanvraag via ${SOURCE_LABELS[body.source || ""] || "de website"} — ${body.name}`,
      html: renderLeadHtml(body),
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text().catch(() => "");
    return jsonResponse({ ok: false, error: "send_failed", detail: detail.slice(0, 500) }, 502);
  }

  return jsonResponse({ ok: true });
};
