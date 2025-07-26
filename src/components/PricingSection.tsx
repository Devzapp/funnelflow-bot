import { Button } from "@/components/ui/button";
import { CreditCard, Calendar } from "lucide-react";
const PricingSection = () => {
  return <section className="bg-gradient-primary py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Plano Smart + Funil
        </h2>
        <p className="text-xl mb-12 opacity-90">
          6 meses de acesso completo com mentoria semanal e implementação
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <CreditCard className="mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold mb-2">Parcelado</h3>
              <div className="text-4xl font-bold mb-1">6× R$ 277</div>
              <p className="opacity-80">por mês</p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold mb-2">À vista</h3>
              <div className="text-4xl font-bold mb-1">R$ 1.500</div>
              <p className="opacity-80">economia garantida</p>
            </div>
          </div>
          
          <div className="text-left mb-8">
            <h4 className="text-lg font-semibold mb-4">✅ BÔNUS:</h4>
            <ul className="space-y-2">
              
              <li>• Videochamada de implementação</li>
              <li>• Templates prontos para usar</li>
              
              <li>• Manual de boas práticas</li>
            </ul>
          </div>
          
          <Button variant="default" size="xl" className="w-full bg-white text-primary hover:bg-white/90 text-lg font-bold h-16 flex flex-col items-center justify-center" asChild>
            <a href="https://checkout.devzapp.com.br/subscribe/smart-webhook-promo" target="_blank" rel="noopener noreferrer">
              <span>Quero ser Smart + Funil</span>
              <span className="text-sm">6× R$ 277/mês ou R$ 1.500 à vista</span>
            </a>
          </Button>
        </div>

        
      </div>
    </section>;
};
export default PricingSection;