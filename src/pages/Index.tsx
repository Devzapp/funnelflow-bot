import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "./Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
            <img
        src="https://pages.greatpages.com.br/www.devzapp.com.br/1750273465/imagens/desktop/686783_1_171988986966836fce08dff144878762.svg"
        alt="Logo Devzapp"
        className="fixed top-2 left-2 z-50 logo-grande"
      />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer/>
    </div>
  );
};

export default Index;
