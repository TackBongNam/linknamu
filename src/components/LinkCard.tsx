"use client";

import Image from "next/image";
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
      className="flex min-h-[4.5rem] items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/45 px-4 py-3 font-medium tracking-tight shadow-[0_10px_28px_-16px_rgba(140,84,48,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition duration-200 hover:-translate-y-px hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/75">
          <Image
            src={link.icon}
            alt=""
            width={20}
            height={20}
            className="size-5"
          />
        </span>
        <span className="truncate">{link.title}</span>
      </span>
      {count !== undefined && (
        <span className="shrink-0 pr-1 text-sm font-normal text-foreground/60">
          {count.toLocaleString("ko-KR")}회
        </span>
      )}
    </a>
  );
}
