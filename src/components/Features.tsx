
import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Produto 3D Personalizado",
      description: "Criado com impressão 3D de alta qualidade, cada detalhe do Stitch foi cuidadosamente elaborado.",
    },
    {
      title: "Material Durável",
      description: "Produzido com materiais resistentes que garantem anos de uso sem perder a cor ou forma.",
    },
    {
      title: "Design Exclusivo",
      description: "Um design fofo e único que se destaca em qualquer ambiente, seja em casa ou no escritório.",
    },
    {
      title: "Capacidade Ideal",
      description: "Espaço perfeito para acomodar lápis, canetas, pincéis e outros itens de escritório.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nosso porta-lápis do Stitch?</h2>
          <p className="text-gray-600 text-lg">
            Um produto único que une funcionalidade e o charme do personagem mais amado da Disney.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="/lovable-uploads/907e2d9b-8904-4af2-b496-bfb5248f1d35.png"
              alt="Porta-lápis Stitch visto de frente"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="limited-badge text-xs">
              EDIÇÃO<br />LIMITADA
            </div>
          </div>

          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 text-stitch-blue">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Garantir o meu agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
