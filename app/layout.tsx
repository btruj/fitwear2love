// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Poppins, Great_Vibes } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

export const metadata: Metadata = {
  title: "FitWear2Love",
  description: "Exclusive Women Fitwear — Made in Colombia & Brazil",
   icons: {
    icon: "/favicon-v2.ico",          
    shortcut: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png" 
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        <Nav />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}