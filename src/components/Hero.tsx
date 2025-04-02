
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center hero-gradient text-white pt-20"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDA3N0NDIiBkPSJNMCAwaDI1NnYyNTZIMHoiLz48cGF0aCBkPSJNMjMgMjNsMjEwIDIxME0yMzMgMjNMMjMgMjMzIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L2c+PC9zdmc+')] opacity-10 bg-repeat"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Professional web and mobile development services tailored for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-syncsoft-700 hover:bg-gray-100">
              <a href="#portfolio" className="flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
