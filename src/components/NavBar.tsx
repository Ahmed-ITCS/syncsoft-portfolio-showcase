
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={
        `fixed top-0 w-full z-50 transition-all duration-300
         ${isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-lg py-2'
            : 'bg-white/40 backdrop-blur-md shadow-md py-4'}`
      }
      style={{ WebkitBackdropFilter: 'blur(12px)' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="/lovable-uploads/f76d3d03-d546-40de-bd4e-e24a0eaefe97.png" 
            alt="SyncSoft Logo" 
            className="h-12 w-auto drop-shadow-md rounded-full bg-white/60 p-1"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-syncsoft-600 transition-colors font-semibold px-2 py-1 rounded-lg hover:bg-syncsoft-100/30 focus:outline-none focus:ring-2 focus:ring-syncsoft-400"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-syncsoft-600 hover:bg-syncsoft-700 shadow-md font-bold ml-2">
            <a href="#contact">Get Started</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg ring-1 ring-syncsoft-100 shadow-xl py-4 px-4 animate-fade-in z-50">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-syncsoft-600 transition-colors font-semibold py-2 px-2 rounded-lg hover:bg-syncsoft-100/50 focus:outline-none focus:ring-2 focus:ring-syncsoft-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-syncsoft-600 hover:bg-syncsoft-700 w-full font-bold">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
