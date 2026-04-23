"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { name: string; file: string };

export function ClientLogo({ name, file }: Props) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div
        className="flex h-12 w-28 min-w-0 max-w-36 items-center justify-center rounded border border-slate-200 bg-slate-50 px-2 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-slate-500 sm:h-14"
        title={name}
      >
        {name}
      </div>
    );
  }

  return (
    <div className="group flex h-14 min-w-0 max-w-36 items-center justify-center sm:h-16">
      <div className="relative h-10 w-32 sm:h-12 sm:w-36">
        <Image
          src={`/images/clients/${encodeURIComponent(file)}`}
          alt={name}
          fill
          className="object-contain object-center opacity-90 transition group-hover:opacity-100"
          onError={() => setOk(false)}
          sizes="(max-width: 640px) 120px, 160px"
          unoptimized
        />
      </div>
    </div>
  );
}
