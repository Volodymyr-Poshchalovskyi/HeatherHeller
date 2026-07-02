import HeroSection from "@/components/home/HeroSection";
import BusinessDivisions from "@/components/home/BusinessDivisions";
import HowIHelpSection from "@/components/home/HowIHelpSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import AboutHeatherSection from "@/components/home/AboutHeatherSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";
import StickyBottomBar from "@/components/home/StickyBottomBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessDivisions />
      <HowIHelpSection />
      <FeaturedWorkSection />
      <AboutHeatherSection />
      <TestimonialSection />
      <ContactSection />
      <StickyBottomBar />
    </>
  );
}
