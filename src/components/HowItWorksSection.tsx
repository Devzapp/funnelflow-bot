import { Users, MessageCircle, Target, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Como funciona o funil com grupos de WhatsApp
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Passo a passo do processo que recupera até 40% das vendas abandonadas
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Topo: Atração e Segmentação
            </h3>
            <p className="text-muted-foreground">
              Captação de leads por link ou e-mail direcionando para grupos segmentados. 
              Organize sua audiência por interesse, perfil ou estágio no funil.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Meio: Nutrição e Relacionamento
            </h3>
            <p className="text-muted-foreground">
              Envio de conteúdos sequenciais e menções em massa para engajamento. 
              Funciona mesmo em grupos silenciados, mantendo o relacionamento ativo.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Fundo: Conversão e Recuperação
            </h3>
            <p className="text-muted-foreground">
              Mensagens individuais automatizadas para recuperar carrinhos abandonados 
              e converter leads qualificados em vendas efetivas.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <TrendingUp className="text-primary mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Resultados Comprovados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">90-98%</div>
              <p className="text-muted-foreground">Taxa de abertura no WhatsApp vs. 20% no e-mail</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5x mais</div>
              <p className="text-muted-foreground">Interação comparado ao e-mail marketing</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <strong>Benefícios da automação:</strong> Personalização em escala • Segmentação avançada • 
            Métricas em tempo real • Disponibilidade 24/7
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;