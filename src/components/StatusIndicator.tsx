"use client";

import { useEffect, useState } from "react";

const FALLBACK = "Reageert doorgaans dezelfde werkdag";

function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return "zojuist";
  if (minutes < 60) return `${minutes} min geleden`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} uur geleden`;
  const days = Math.round(hours / 24);
  return `${days} dag${days === 1 ? "" : "en"} geleden`;
}

/** Live "laatst gereageerd"-indicator — valt terug op een eerlijke algemene belofte zolang er geen (verse) meting is. */
export default function StatusIndicator({ className }: { className?: string }) {
  const [text, setText] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/status")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { lastRespondedAt?: string } | null) => {
        if (cancelled || !data?.lastRespondedAt) return;
        setText(`Laatst gereageerd: ${relativeTime(data.lastRespondedAt)}`);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return <span className={className}>{text}</span>;
}
