
const Storytelling = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A história por trás do porta-lápis</h2>
          <p className="text-gray-600 text-lg">
            Mais que um item de decoração, uma companhia para seus momentos de criação
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto relative">
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-stitch-blue rounded-full flex items-center justify-center text-white text-3xl font-bold">
            "
          </div>
          
          <div className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              Você se lembra daquele personagem travesso e adorável que conquistou corações ao redor do mundo? Stitch, o "Experimento 626", chegou à Terra como um alienígena destrutivo, mas encontrou em Lilo uma amiga que mudou seu destino.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Assim como Stitch aprendeu que "Ohana significa família, e família significa que ninguém fica para trás ou é esquecido", nosso porta-lápis do Stitch foi criado para ser aquele companheiro fiel que guarda seus instrumentos criativos com o mesmo cuidado.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Cada vez que você olhar para seu porta-lápis, ele estará lá com seu sorriso travesso, lembrando que até nos momentos mais estressantes de estudo ou trabalho, é importante manter a alegria e a criatividade.
            </p>
            
            <p className="text-lg font-bold text-stitch-blue">
              Porque às vezes, tudo que precisamos é de um amigo azul para trazer um sorriso ao nosso rosto e organizar nossas ideias.
            </p>
            
            <div className="mt-8 text-center">
              <a
                href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Quero esse companheiro!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
