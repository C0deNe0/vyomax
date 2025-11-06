"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/logo.png";
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  //   { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-10 transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur border-b border-border"
          : "bg-transparent"
      )}
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex font-semibold items-center text-2xl">
          <div className=" h-20 w-22 flex justify-center    ">
            <img src="/logo.png" alt="logo" />
          </div>
          <span className="text-primary pl-0">Team Vyomax</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xl text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-secondary/60"
        >
          <span className="sr-only">Open menu</span>
          <div className="relative w-5 h-4">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 bg-foreground transition-transform",
                open && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-foreground transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 bg-foreground transition-transform",
                open && "-translate-y-1.5 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass absolute right-4 left-4 top-16 rounded-xl p-4 flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-secondary/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
