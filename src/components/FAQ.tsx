
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o material do porta-lápis?",
      answer: "O porta-lápis do Stitch é feito de filamento PLA de alta qualidade, um material durável e ecologicamente responsável, ideal para impressões 3D."
    },
    {
      question: "Quais são as dimensões do produto?",
      answer: "O porta-lápis do Stitch tem aproximadamente 12cm de altura, 10cm de largura e 8cm de profundidade, tamanho ideal para sua mesa de estudos ou trabalho."
    },
    {
      question: "Posso lavar o porta-lápis?",
      answer: "Sim, o porta-lápis pode ser limpo com um pano levemente úmido. Evite mergulhá-lo em água ou usar produtos químicos agressivos para preservar as cores e detalhes."
    },
    {
      question: "Quanto tempo dura a entrega?",
      answer: "O prazo de entrega varia entre 7 a 15 dias úteis, dependendo da sua localização. Trabalhamos com os melhores serviços de entrega para garantir que seu Stitch chegue em perfeitas condições."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia de 30 dias contra defeitos de fabricação. Sua satisfação é nossa prioridade."
    },
    {
      question: "Posso personalizar mais o meu porta-lápis?",
      answer: "No momento, oferecemos apenas o modelo padrão do Stitch. Mas fique de olho em nossas redes sociais, pois estamos sempre trabalhando em novas opções de personalização!"
    },
  ];

  return (
    <section id="faq" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre o porta-lápis do Stitch
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Tem mais alguma dúvida? Entre em contato conosco pelo WhatsApp ou email!
          </p>
          <a
            href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Quero comprar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
