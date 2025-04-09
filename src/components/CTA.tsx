
import { ArrowRight, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-stitch-blue to-stitch-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            <span>Oferta por tempo limitado!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não deixe o Stitch escapar!
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Seu porta-lápis único e especial está esperando por você. Traga mais diversão, organização e um toque de magia Disney para sua mesa hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-stitch-blue hover:bg-blue-50 font-bold py-3 px-8 rounded-full 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center flex items-center justify-center gap-2"
            >
              Adotar meu Stitch agora
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#testimonials"
              className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-8 rounded-full 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
            >
              Ver depoimentos
            </a>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            * Disponível enquanto durarem os estoques. Entrega para todo Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
