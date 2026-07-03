import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Discover how we translate brand strategy, luxury experiences, and high-production cinematic content into major sponsorships and direct funding.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Proven Luxury Brand & Experiential Success",
    description: "Discover how we translate brand strategy, luxury experiences, and high-production cinematic content into major sponsorships and direct funding.",
    url: "https://www.heatherheller.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
