import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sinners & Saints",
  description: "Uncompromising creative video campaigns, editorial photography, podcast production, and narrative brand storytelling that drive cultural relevance.",
  alternates: {
    canonical: "/sinners-saints",
  },
  openGraph: {
    title: "Sinners & Saints | Premium Content Engine & Visual Storytelling",
    description: "Uncompromising creative video campaigns, editorial photography, podcast production, and narrative brand storytelling that drive cultural relevance.",
    url: "https://www.heatherheller.com/sinners-saints",
  },
};

export default function SinnersSaintsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
