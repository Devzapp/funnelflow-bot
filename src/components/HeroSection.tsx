import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useUTMParams } from "@/hooks/useUTMParams";

const HeroSection = () => {
  const { getCheckoutUrlWithUTMs } = useUTMParams();
  
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Recupere até 40% das vendas abandonadas via WhatsApp —{" "}
          <span className="text-primary">automatizado e eficaz</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Funil completo via painel: grupos, menções, automações e agendamentos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="whatsapp" 
            size="xl" 
            className="text-lg h-16 px-8 flex flex-col items-center justify-center"
            asChild
          >
            <a href={getCheckoutUrlWithUTMs("https://checkout.devzapp.com.br/subscribe/smart-webhook-promo")} target="_blank" rel="noopener noreferrer">
              <span>Quero ser Smart + Funil</span>
              <span className="text-sm">6× R$ 277/mês ou R$ 1.500 à vista</span>
            </a>
          </Button>
          <Button variant="whatsappOutline" size="xl" className="text-lg">
            Demonstração personalizada
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-card rounded-lg p-6 shadow-card-soft">
            <div className="text-3xl font-bold text-primary mb-2">+800 mil</div>
            <p className="text-muted-foreground">grupos gerenciados</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-card-soft">
            <div className="text-3xl font-bold text-primary mb-2">+4.000</div>
            <p className="text-muted-foreground">empresas ativas</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-card-soft">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <p className="text-muted-foreground">vendas recuperadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;