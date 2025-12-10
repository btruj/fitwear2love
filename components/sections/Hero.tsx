"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-28">
      <div
        className="relative min-h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backround.png')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-xl">
            <h1 className="mb-6 mt-20 text-5xl md:text-7xl font-cursive animate-pulsing">
              Exclusive Women Fitwear
            </h1>
            <p className="mb-6 text-lg md:text-2xl font-sans animate-flash">
              Made In Colombia &amp; Brazil
            </p>
            <Link
              href="/#shop"
              className="
                inline-block px-6 py-3 rounded-lg font-sans animate-shake
                text-white
                bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-400
                hover:from-pink-400 hover:via-purple-400 hover:to-fuchsia-500
                shadow-md
              "
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}