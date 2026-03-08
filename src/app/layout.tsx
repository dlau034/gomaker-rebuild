import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arvo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gomaker.co.uk"),
  title: {
    default: "Gomaker — 3D Printed Goods from SE London",
    template: "%s | Gomaker",
  },
  description:
    "Handmade 3D printed dragons, flexi animals, lamps and accessories. Made to order in SE London. Ships in 1–3 days.",
  openGraph: {
    type: "website",
    siteName: "Gomaker",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={arvo.variable}>
      <body
        className="font-sans antialiased flex flex-col min-h-screen bg-white text-[#1a1a1a]"
      >
        <TrustStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
