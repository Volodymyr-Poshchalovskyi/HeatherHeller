import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience Lab",
  description: "Curating luxury brand activations, high-society retreats, wellness salons, and VIP experiences globally. Specialized in luxury, sports, and health.",
  alternates: {
    canonical: "/experience-lab",
  },
  openGraph: {
    title: "Experience Lab | Premium Event Production & VIP Activations",
    description: "Curating luxury brand activations, high-society retreats, wellness salons, and VIP experiences globally. Specialized in luxury, sports, and health.",
    url: "https://www.heatherheller.com/experience-lab",
  },
};

export default function ExperienceLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
