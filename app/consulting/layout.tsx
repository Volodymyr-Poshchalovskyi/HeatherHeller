import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Bespoke brand advisory, partnership strategy, executive branding, and sponsorship readiness frameworks for high-value talent and global elite brands.",
  alternates: {
    canonical: "/consulting",
  },
  openGraph: {
    title: "Brand & Strategic Consulting Services | Heather Heller",
    description: "Bespoke brand advisory, partnership strategy, executive branding, and sponsorship readiness frameworks for high-value talent and global elite brands.",
    url: "https://www.heatherheller.com/consulting",
  },
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
