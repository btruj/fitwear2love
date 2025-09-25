import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backround.png')" }} // lives in /public
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-6 text-6xl md:text-8xl  font-cursive animate-pulsing">
              Exclusive Women Fitwear
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-sans animate-flash">
              Made In Colombia &amp; Brazil
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 font-sans animate-shake"
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}