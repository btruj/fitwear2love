import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        flex items-center justify-center 
        h-19  /* match typical navbar height */
        bg-gradient-to-r from-pink-200 via-purple-200 to-fuchsia-300
        text-white
      "
    >
      <a
        href="https://www.instagram.com/fitwear2love/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <Image
          src="/logo2.png"
          alt="FitWear2Love logo"
          width={90}   // slightly smaller to match navbar scale
          height={30}
          priority
        />
        <span className="sr-only">FitWear2Love on Instagram</span>
      </a>
    </footer>
  );
}