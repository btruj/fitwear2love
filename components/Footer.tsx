import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sticky top-0 z-50  flex justify-center  py-4 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white">
      <a
        href="https://www.instagram.com/fitwear2love/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <Image
          src="/logo.png"   // make sure this exists in /public
          alt="FitWear2Love logo"
          width={100}
          height={2}
          priority
        />
        <span className="sr-only">FitWear2Love on Instagram</span>
      </a>
    </footer>
  );
}