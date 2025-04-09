
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-28 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block bg-blue-100 text-stitch-blue px-4 py-2 rounded-full text-sm font-bold mb-4">
              Edição Limitada! 😍
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu <span className="text-stitch-blue">Stitch</span> para guardar seus tesouros criativos
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Transforme seu espaço com o adorável porta-lápis do Stitch em 3D. Seu companheiro perfeito para estudos e trabalho que traz diversão e organização para sua mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Quero meu Stitch agora!
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn-secondary">
                Descobrir mais
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold rounded-full py-1 px-3 rotate-12 animate-pulse z-10">
              Últimas unidades!
            </div>
            <img
              src="/lovable-uploads/9f1dd02e-66ac-44e2-b6d4-74457389a1bb.png"
              alt="Porta-lápis Stitch 3D"
              className="w-full max-w-md mx-auto floating rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="hero-waves">
        <div className="wave"></div>
      </div>
    </section>
  );
};

export default Hero;
