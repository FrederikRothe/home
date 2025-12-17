import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Scene from "@/components/Scene";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Frederik Rothe",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Scene />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
