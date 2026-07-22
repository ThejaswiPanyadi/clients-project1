import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yarnbloom_crochet — Handmade with Love",
  description:
    "Discover handcrafted crochet creations made with love — plushies, flower bouquets, keychains, and more. Each piece is uniquely crafted by Sandhya Gowda with premium yarn.",
  keywords: [
    "crochet",
    "handmade",
    "plushies",
    "crochet bouquet",
    "amigurumi",
    "crochet gifts",
  ],
  openGraph: {
    title: "yarnbloom_crochet — Handmade with Love",
    description:
      "Handcrafted crochet creations made with love — plushies, bouquets, keychains and more by Sandhya Gowda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FFF8F2]">{children}</body>
    </html>
  );
}
