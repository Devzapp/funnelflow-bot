import { Button } from "@/components/ui/button";
import { Zap, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-primary text-white rounded-lg p-12 shadow-whatsapp">
          <Zap className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garante já sua automação eficiente
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Plano semestral a partir de R$ 1.500 — ROI escalável com vendas recuperadas
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-lg">
            <Clock size={20} />
            <span className="font-semibold">Vagas limitadas nesse lançamento</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" className="bg-white text-primary hover:bg-white/90 text-lg font-bold h-16 flex flex-col items-center justify-center">
              <span>Quero ser Smart + Funil</span>
              <span className="text-sm">6× R$ 277/mês ou R$ 1.500 à vista</span>
            </Button>
            <Button variant="whatsappOutline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Demonstração personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;