import type { Metadata } from "next";
import { JetBrains_Mono,Manrope } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], // ✅ keep this
});


const ManRope = Manrope({
  subsets: ["latin"], // ✅ keep this
});

export const metadata: Metadata = {
  title: "Saad Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
       
        {children}
      </body>
    </html>
  );
}

