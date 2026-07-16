import type { Metadata } from "next";
import "./globals.css";
import { PersistentHeader } from "./header";

export const metadata: Metadata = {
  title: "Northline — Residential engineering, reimagined",
  description: "Structure, climate and construction detail resolved as one calm system.",
  openGraph: { title: "Northline — Residential Engineering", description: "Homes engineered to feel effortless." },
  twitter: { card: "summary_large_image", title: "Northline — Residential Engineering", description: "Homes engineered to feel effortless." },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className="motion-force motion-loading"><body><PersistentHeader/>{children}</body></html>}
