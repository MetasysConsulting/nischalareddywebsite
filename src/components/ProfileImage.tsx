"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
};

export function ProfileImage({ src, alt, className = "", size = 220 }: Props) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div
        className={cn(
          "flex select-none items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-4xl font-light tracking-tight text-slate-500",
          className
        )}
        style={{ width: size, height: size }}
        aria-hidden
      >
        NR
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-full bg-slate-200",
        "shadow-[0_20px_50px_-20px_rgba(26,35,126,0.35)]",
        "ring-2 ring-white/90 ring-offset-2 ring-offset-slate-100/80",
        "transition duration-500",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
        onError={() => setOk(false)}
        priority
        unoptimized
      />
    </div>
  );
}
