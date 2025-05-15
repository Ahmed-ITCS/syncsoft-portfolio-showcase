
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-syncsoft-600 via-syncsoft-400 to-syncsoft-700 text-white pt-20 overflow-hidden"
    >
      {/* Glassmorphic foreground */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=1080&q=80')] bg-cover bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-syncsoft-700/80 via-syncsoft-600/80 to-syncsoft-500/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl backdrop-blur-xl bg-white/10 ring-1 ring-white/15 shadow-xl border border-white/10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight">
            Transforming <span className="text-syncsoft-200">Ideas</span> into <span className="text-syncsoft-100">Digital Reality</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90 font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
            Professional web & mobile development crafted for your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-syncsoft-700 hover:bg-gray-100 font-semibold hover:scale-105 transition-transform shadow-lg">
              <a href="#portfolio" className="flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/95 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
