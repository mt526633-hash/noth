import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline — Homes resolved to the last line",
  description: "Residential engineering for homes of uncommon clarity.",
  openGraph: {
    title: "Northline — Residential Engineering",
    description: "Homes, resolved to the last line.",
    images: [{ url: "/og.png", width: 1487, height: 1058, alt: "Northline blueprint-to-building residential engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline — Residential Engineering",
    description: "Homes, resolved to the last line.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
