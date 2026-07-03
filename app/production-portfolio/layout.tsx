import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Portfolio",
  description: "A curated gallery of our high-production campaigns, premium photography, custom commercials, and event media production.",
  alternates: {
    canonical: "/production-portfolio",
  },
  openGraph: {
    title: "Production Portfolio | Luxury Campaigns & Visual Assets",
    description: "A curated gallery of our high-production campaigns, premium photography, custom commercials, and event media production.",
    url: "https://www.heatherheller.com/production-portfolio",
  },
};

export default function ProductionPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
