
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Stitch3D</h3>
            <p className="mb-4">Transformando sua mesa com personagens que você ama. Produtos 3D únicos e de qualidade.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>WhatsApp: (83) 99999-9999</li>
              <li>Email: contato@inova3d.com</li>
              <li>Horário: Seg-Sex, 9h-18h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Receba novidades e ofertas exclusivas.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-stitch-blue hover:bg-stitch-blue-dark px-4 py-2 rounded-r-md transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} Inova3D Personalizados PB. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">
            Stitch e outros personagens Disney são marcas registradas da Disney. Este é um produto não oficial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
