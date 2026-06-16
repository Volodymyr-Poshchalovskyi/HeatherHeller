import HeroSection from "@/components/home/HeroSection";
import BusinessDivisions from "@/components/home/BusinessDivisions";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import AboutHeatherSection from "@/components/home/AboutHeatherSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessDivisions />
      <FeaturedWorkSection />
      <AboutHeatherSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
