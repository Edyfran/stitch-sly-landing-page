
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-stitch-blue font-bold text-xl md:text-2xl">Stitch3D</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-700 hover:text-stitch-blue transition-colors">Características</a>
          <a href="#benefits" className="text-gray-700 hover:text-stitch-blue transition-colors">Benefícios</a>
          <a href="#testimonials" className="text-gray-700 hover:text-stitch-blue transition-colors">Depoimentos</a>
          <a href="#faq" className="text-gray-700 hover:text-stitch-blue transition-colors">FAQ</a>
        </nav>
        
        <a 
          href="https://www.inova3dpersonalizadospb.shop/produtos/stitch3d/"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-stitch-blue hover:bg-stitch-blue-dark text-white rounded-full px-4 py-2 transition-all duration-300"
        >
          <ShoppingCart size={18} />
          <span className="font-medium">Comprar</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
