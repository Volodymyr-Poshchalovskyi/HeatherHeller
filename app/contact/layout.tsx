import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Initiate a confidential brand advisory inquiry or booking. Request a private briefing or schedule a discovery call with Heather Heller's office in Los Angeles.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact the Private Office | Heather Heller",
    description: "Initiate a confidential brand advisory inquiry or booking. Request a private briefing or schedule a discovery call with Heather Heller's office in Los Angeles.",
    url: "https://www.heatherheller.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
