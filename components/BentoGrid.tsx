"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 auto-rows-[14rem] md:auto-rows-[18rem]",
      className
    )}
  >
    {children}
  </div>
);
