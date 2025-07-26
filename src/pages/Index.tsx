import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
