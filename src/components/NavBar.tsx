import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

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
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '/service/web-development' },
    { name: 'Mobile Development', href: '/service/mobile-development' },
    { name: 'Frontend Development', href: '/service/frontend-development' },
    { name: 'Backend Development', href: '/service/backend-development' },
    { name: 'Performance Optimization', href: '/service/performance-optimization' },
    { name: 'Maintenance & Support', href: '/service/maintenance-support' },
  ];

  return (
    <header
      className={
        `fixed top-0 w-full z-50 transition-all duration-300
         ${isScrolled
            ? 'bg-white/90 bg-blur-sm shadow-2xl py-2'
            : 'bg-white/60 shadow-lg py-4'}`
      }
      style={{ WebkitBackdropFilter: 'blur(14px)', backdropFilter: 'blur(14px)' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/f76d3d03-d546-40de-bd4e-e24a0eaefe97.png"
            alt="SyncSoft Logo"
            className="h-14 w-14 rounded-full bg-white/[.85]  shadow-xl border-4 border-white/60 hover:scale-105 transition-transform duration-200"
            style={{
               filter: "drop-shadow(0 8px 14px rgba(2,132,199,0.12)) drop-shadow(0 2px 4px rgba(2,132,199,0.19))",
               boxShadow: "0 3px 24px 6px #bae6fd70"
            }}
          />
          <span className="font-extrabold text-xl md:text-2xl text-syncsoft-600 tracking-tight drop-shadow-sm bg-gradient-to-br from-syncsoft-700 via-syncsoft-200 to-syncsoft-600 bg-clip-text text-transparent select-none animate-text-gradient font-mono">SyncSoft</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-syncsoft-500 transition-all font-semibold px-3 py-1.5 rounded-xl hover:bg-syncsoft-100/60 ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-syncsoft-300/80 shadow-sm hover:scale-105 duration-150"
            >
              {link.name}
            </a>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:text-syncsoft-500 transition-all font-semibold px-3 py-1.5 rounded-xl hover:bg-syncsoft-100/60 ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-syncsoft-300/80 shadow-sm hover:scale-105 duration-150">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-sm border border-syncsoft-200/50 shadow-xl">
              {serviceLinks.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <a
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:text-syncsoft-600 hover:bg-syncsoft-50 transition-colors cursor-pointer"
                  >
                    {service.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-syncsoft-600 hover:bg-syncsoft-800 shadow-lg font-bold ml-2 px-6 py-2 ring-2 ring-syncsoft-300/40">
            <a href="#contact" className="tracking-wide">Get Started</a>
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
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl ring-2 ring-syncsoft-100/60 shadow-2xl py-4 px-4 animate-fade-in z-50 rounded-b-3xl border-t border-syncsoft-100/40">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-syncsoft-600 font-bold transition-all py-2 px-3 rounded-xl hover:bg-syncsoft-100/80 ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-syncsoft-400 duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Services Links */}
            <div className="border-t border-syncsoft-200 pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-2 px-3">Services</p>
              {serviceLinks.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-gray-700 hover:text-syncsoft-600 font-medium transition-all py-2 px-3 rounded-xl hover:bg-syncsoft-100/80 duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </a>
              ))}
            </div>
            
            <Button className="bg-syncsoft-600 hover:bg-syncsoft-800 w-full font-bold py-3 rounded-xl">
              <a href="#contact" className="tracking-wide">Get Started</a>
            </Button>
          </nav>
        </div>
      )}
      
      
      <style>
        {`
          .animate-text-gradient {
            background-size: 200% 200%;
            animation: textgradient 3s ease-in-out infinite alternate;
          }
          @keyframes textgradient {
            0% { background-position: left top; }
            100% { background-position: right bottom; }
          }
        `}
      </style>
    </header>
  );
};

export default NavBar;
