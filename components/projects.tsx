"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Array<"Fixed Wing" | "Quadcopter" | "Experimental">;
};

const allProjects: Project[] = [
  {
    id: "p1",
    title: "",
    description: "Fixed-wing with stabilized flight controller.",
    image: "/rcPlane/img3.png",
    tags: ["Fixed Wing"],
  },
  {
    id: "p2",
    title: "",
    description:
      "High-efficiency quadcopter tuned for endurance and stability.",
    image: "/drone/img1.png",
    tags: ["Quadcopter"],
  },
  {
    id: "p3",
    title: "",
    description: "Experimental flying wing with custom control surfaces.",
    image: "/rcPlane/img1.png",
    tags: ["Experimental", "Fixed Wing"],
  },
];

const TAGS: Project["tags"] = ["Fixed Wing", "Quadcopter", "Experimental"];

export default function Projects() {
  const [active, setActive] = useState<"All" | Project["tags"][number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl  px-4 py-20 md:h-screen">
      <div className="flex items-center justify-between flex-wrap  gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        <div className="flex items-center gap-2">
          <FilterButton
            label="All"
            active={active === "All"}
            onClick={() => setActive("All")}
          />
          {TAGS.map((t) => (
            <FilterButton
              key={t}
              label={t}
              active={active === t}
              onClick={() => setActive(t)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group rounded-xl overflow-hidden border border-border bg-card/60 hover:bg-card transition transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={p.image || "/placeholder.svg"}
                alt={p.title}
                className="h-70 w-full  transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-primary/20 group-hover:ring-primary/40 transition" />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md border border-border bg-secondary/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-lg border text-sm transition",
        active
          ? "bg-primary text-primary-foreground glow border-transparent"
          : "border-border hover:bg-secondary/60"
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
