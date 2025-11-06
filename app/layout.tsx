import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Cursor from "@/components/cursor";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Team VyomaX",
  description:
    "We design, build, and innovate RC aircraft and drones with passion. Engineering, aerodynamics, and community at our core.",
  keywords: [
    "Team VyomaX",
    "RC planes",
    "RC drones",
    "aeromodeling",
    "fixed wing",
    "quadcopter",
    "aerospace",
    "engineering club",
  ],
  openGraph: {
    title: "Team VyomaX – Elevating Innovation Beyond Limits",
    description:
      "We design, build, and innovate RC aircraft and drones with passion.",
    type: "website",
    locale: "en_US",
    url: "https://vyomax.vercel.app",
    siteName: "Team VyomaX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team VyomaX – Elevating Innovation Beyond Limits",
    description:
      "We design, build, and innovate RC aircraft and drones with passion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased `}
      >
        <Suspense fallback={null}>
          <Cursor />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
