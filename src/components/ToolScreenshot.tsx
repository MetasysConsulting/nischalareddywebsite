"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  file: string;
  className?: string;
};

export function ToolScreenshot({ title, file, className = "" }: Props) {
  const [ok, setOk] = useState(true);
  const src = `/images/tools/${encodeURIComponent(file)}`;

  if (!ok) {
    return (
      <div
        className={`flex aspect-[4/3] flex-col items-center justify-center rounded border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 text-center text-sm text-slate-500 ${className}`}
        title={file}
      >
        <span className="font-medium text-slate-600">Add image</span>
        <code className="mt-1 max-w-full truncate text-xs">public/images/tools/{file}</code>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm ${className}`}>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover object-top"
          onError={() => setOk(false)}
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>
    </div>
  );
}
