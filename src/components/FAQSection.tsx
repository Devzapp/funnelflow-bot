import { HelpCircle, CheckCircle, Shield, BarChart3 } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Perguntas frequentes
        </h2>
        
        <div className="space-y-8">
          <div className="bg-background p-6 rounded-lg shadow-card-soft">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  É totalmente automático?
                </h3>
                <p className="text-muted-foreground">
                  Sim, com poucos cliques você cria grupos com capa, admins e descrição pronta. 
                  A automação funciona 24/7 sem intervenção manual.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-card-soft">
            <div className="flex items-start gap-4">
              <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Risco de bloqueio no WhatsApp?
                </h3>
                <p className="text-muted-foreground">
                  Manual de boas práticas incluso para segurança total. Seguimos todas as diretrizes 
                  oficiais do WhatsApp para garantir a proteção da sua conta.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-card-soft">
            <div className="flex items-start gap-4">
              <BarChart3 className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Existem limites no plano?
                </h3>
                <p className="text-muted-foreground">
                  Plano Smart: até 40 grupos por número, mensagens ilimitadas. 
                  Diamond e Black escalam ilimitado para grandes operações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;