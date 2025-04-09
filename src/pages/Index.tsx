
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Storytelling from '@/components/Storytelling';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import { useToast } from '@/components/ui/use-toast';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    
    // Mostrar notificação de oferta após 3 segundos
    const timer = setTimeout(() => {
      toast({
        title: "🎉 Oferta Especial!",
        description: "Aproveite 15% de desconto no porta-lápis do Stitch hoje!",
        duration: 8000,
      });
    }, 3000);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      clearTimeout(timer);
    };
  }, [showScrollTop, toast]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Features />
      <Benefits />
      <Storytelling />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-stitch-blue text-white p-3 rounded-full shadow-lg hover:bg-stitch-blue-dark transition-all z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;
