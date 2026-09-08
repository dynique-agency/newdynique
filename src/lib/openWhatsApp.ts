/**
 * Opens a WhatsApp chat with a prefilled message in a new tab.
 *
 * `window.open` silently fails (returns `null`, or a window that's
 * immediately closed) when the popup is blocked. In that case we fall back
 * to a full navigation via `window.location.href`, which isn't subject to
 * popup blockers.
 */
export function openWhatsApp(message: string, phone = "31624572572") {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const win = window.open(url, "_blank");
  if (!win || win.closed || typeof win.closed === "undefined") {
    window.location.href = url;
  }
}
