import type { Metadata } from "next";
import { Caveat, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const caveat = Caveat({ subsets: ["latin"], weight: "500", variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Mohammad Saad — Full-Stack Developer",
  description: "Portfolio of Mohammad Saad, a full-stack developer building thoughtful web experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
