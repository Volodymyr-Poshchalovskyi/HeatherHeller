import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Heather Heller, veteran luxury brand architect and strategic advisor. We position talent and brands to command authority and category dominance.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Heather Heller | Elite Brand Architect & Advisor",
    description: "Meet Heather Heller, veteran luxury brand architect and strategic advisor. We position talent and brands to command authority and category dominance.",
    url: "https://www.heatherheller.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
