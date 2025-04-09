
import { Palette, Smile, Heart, Gift } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Palette className="h-8 w-8 text-stitch-blue" />,
      title: "Estimula a criatividade",
      description: "O design divertido do Stitch inspira momentos criativos todos os dias."
    },
    {
      icon: <Smile className="h-8 w-8 text-stitch-blue" />,
      title: "Alegra seu ambiente",
      description: "Traz mais vida e personalidade para sua mesa de estudos ou trabalho."
    },
    {
      icon: <Heart className="h-8 w-8 text-stitch-blue" />,
      title: "Encanta quem vê",
      description: "Desperta sorrisos e comentários positivos de quem passa pelo seu espaço."
    },
    {
      icon: <Gift className="h-8 w-8 text-stitch-blue" />,
      title: "Presente perfeito",
      description: "A escolha ideal para presentear quem ama o Stitch e itens de papelaria."
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais que um porta-lápis, uma experiência</h2>
          <p className="text-gray-600 text-lg">
            Descubra como o porta-lápis do Stitch pode transformar seus momentos de criação e trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Não perca a chance de ter este companheiro especial ao seu lado nos momentos de inspiração!
          </p>
          <a
            href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Quero meu Stitch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
