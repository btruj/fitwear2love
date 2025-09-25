"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  const base =
    "px-6 py-3 rounded-lg font-sans text-lg md:text-xl transition-colors duration-200";
  const idle = "text-white/80 hover:text-white hover:bg-white/10";
  const active = "text-white bg-white/20 shadow-md";

  return (
    <>
      <Link href="/" className={`${base} ${pathname === "/" ? active : idle}`} onClick={onClick}>
        Home
      </Link>
      <Link href="/shop" className={`${base} ${pathname === "/shop" ? active : idle}`} onClick={onClick}>
        Shop
      </Link>
      <Link href="/about" className={`${base} ${pathname === "/about" ? active : idle}`} onClick={onClick}>
        About
      </Link>
      <Link href="/contact" className={`${base} ${pathname === "/contact" ? active : idle}`} onClick={onClick}>
        Contact
      </Link>
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-gradient-to-r from-pink-300/90 via-purple-300/90 to-fuchsia-400/90
        backdrop-blur
        shadow-md
      "
    >
      <nav className="mx-auto flex items-center justify-between px-4 md:px-8 h-19 max-w-7xl text-white">
        <a
          href="https://www.instagram.com/fitwear2love/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo2.png"
            alt="FitWear2Love logo"
            width={78}
            height={40}
            priority
          />
          <span className="sr-only">FitWear2Love on Instagram</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <NavLinks />
        </div>

        <button
          aria-label="Toggle navigation"
          className="md:hidden inline-flex items-center justify-center rounded p-2 ring-1 ring-white/20"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-400">
          <div className="flex flex-col gap-2 px-4 py-4 text-white">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}