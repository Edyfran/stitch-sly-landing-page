
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      role: "Estudante de Design",
      comment: "O porta-lápis do Stitch é simplesmente adorável! Além de deixar minha mesa mais bonita, é super funcional e todo mundo que vê quer saber onde comprei.",
      stars: 5,
    },
    {
      name: "Marcos Silva",
      role: "Professor",
      comment: "Comprei para minha filha e ela amou! A qualidade é excelente, o material é resistente e as cores são vibrantes. Recomendo muito!",
      stars: 5,
    },
    {
      name: "Juliana Mendes",
      role: "Ilustradora",
      comment: "Como fã de Stitch, não podia deixar de ter esse porta-lápis. Ele é perfeito para organizar meus lápis e canetas de desenho. Vale cada centavo!",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 text-lg">
            Pessoas que já adotaram o Stitch para suas mesas compartilham suas experiências
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-stitch-blue text-white flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Junte-se a centenas de clientes satisfeitos e traga o Stitch para sua vida!
          </p>
          <a
            href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Quero fazer parte dessa história
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
