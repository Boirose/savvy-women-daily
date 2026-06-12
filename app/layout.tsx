import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Savvy Women Daily — Money, Beauty, Wellness & Home Tips",
  description:
    "Helping women build smarter money habits, side incomes and healthy routines. Daily tips on finance, wellness, beauty and home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} font-montserrat bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}