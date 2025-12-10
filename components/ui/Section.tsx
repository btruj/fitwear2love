// components/ui/Section.tsx
import { ReactNode } from "react";

export default function Section({
  children,
  alt = false,
  id,
  className = "",
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? "bg-neutral-900/60" : "bg-black"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
    </section>
  );
}