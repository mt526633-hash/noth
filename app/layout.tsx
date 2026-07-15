import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Northline — Residential Engineering",
  description: "High-performance residential engineering shaped around real life.",
  openGraph: {
    title: "Northline — Residential Engineering",
    description: "Homes that stand beautifully.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Northline residential engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline — Residential Engineering",
    description: "Homes that stand beautifully.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
