import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const cinzel = Cinzel({
  variable: "--font-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});


export const metadata: Metadata = {
  title: "Heather Heller | Luxury Consulting & Brand Strategy",
  description: "Bespoke brand strategy, luxury consulting, and experience design for global elite brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} ${cinzel.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col justify-between`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
