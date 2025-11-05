"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BentoGridItem = ({
  className,
  title,
  header,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  header?: React.ReactNode;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      "group/bento relative flex  flex-col overflow-hidden rounded-xl border border-neutral-200 bg-black shadow-input transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer dark:border-white/20 dark:bg-neutral-900",
      className
    )}
  >
    <div className="relative h-full w-full flex-1 overflow-hidden rounded-lg">
      {header}
    </div>

    {title && (
      <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm transition group-hover/bento:translate-x-1">
        {title}
      </div>
    )}
  </div>
);
