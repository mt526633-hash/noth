import type { Metadata } from "next";
import "./globals.css";

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
  return <html lang="en"><body>{children}</body></html>;
}
