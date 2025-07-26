import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Quem confia na nossa automação
        </h2>
        
        <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg shadow-card-soft mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-current" size={24} />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-foreground font-medium italic mb-4">
            "A Devzapp mudou totalmente a forma de interagir com meus Leads... 
            ferramenta mais completa e robusta do mercado."
          </blockquote>
          <cite className="text-primary font-semibold text-lg">— AR Digital Labs</cite>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-card p-6 rounded-lg shadow-card-soft">
            <h3 className="font-bold text-foreground mb-2">Iniciantes</h3>
            <p className="text-muted-foreground">Automação sem dependência técnica</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-card-soft">
            <h3 className="font-bold text-foreground mb-2">Experts</h3>
            <p className="text-muted-foreground">Escalam lançamentos de 6 a 7 dígitos</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-card-soft">
            <h3 className="font-bold text-foreground mb-2">Equipes</h3>
            <p className="text-muted-foreground">Gerenciam múltiplas campanhas simultâneas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;