import HeroSection from "@/components/home/HeroSection";
import BusinessDivisions from "@/components/home/BusinessDivisions";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessDivisions />
      <ServicesSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
