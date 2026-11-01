"use client";

import { useState } from "react";
import type { Link } from "@/data/profile";

type LinkCardProps = {
  link: Link;
  initialCount?: number;
};

export default function LinkCard({ link, initialCount }: LinkCardProps) {
  const [count, setCount] = useState(initialCount);

  function recordClick() {
    // sendBeacon은 새 탭으로 이동해도 요청이 취소되지 않는다.
    navigator.sendBeacon(`/api/clicks/${link.id}`);
    setCount((current) => (current === undefined ? current : current + 1));
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      onAuxClick={(event) => {
        if (event.button === 1) recordClick();
      }}
      className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <span className="min-w-0 truncate">{link.title}</span>
      {count !== undefined && (
        <span className="shrink-0 text-sm font-normal text-foreground/60">
          {count.toLocaleString("ko-KR")}회
        </span>
      )}
    </a>
  );
}
