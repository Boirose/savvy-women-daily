import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Savvy Women Daily — Money, Beauty, Wellness & Home Tips",
  description:
    "Helping women build smarter money habits, side incomes and healthy routines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable}`}
        style={{ fontFamily: "var(--font-poppins), sans-serif", background: "#FFFFFF", color: "#1A0A2E" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}