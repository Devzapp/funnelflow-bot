import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "1 número conectado para gestão de grupos",
    "1 número para mensagens individuais",
    "Gestão de comunidades ilimitadas",
    "Grupos ilimitados",
    "Mensagens ilimitadas",
    "Agendamentos ilimitados, incluindo recorrentes",
    "Envio de vídeos, arquivos, áudios, links, enquetes",
    "1 link de redirecionamento",
    "Visão geral de todos os grupos em dashboard",
    "Avisos de inatividade e desconexão de número",
    "Webhook com fluxo automatizado de mensagens",
    "Videochamada gratuita para implementação (onboarding)",
    "Suporte no horário comercial e treinamento gravado"
  ];

  return (
    <section className="bg-muted py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Tudo incluído no plano semestral
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Acesso completo por 6 meses com todas as funcionalidades
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-card-soft">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;