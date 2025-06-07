
import { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  Code, 
  LayoutGrid, 
  Rocket, 
  RefreshCw 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications with modern technologies and responsive design.',
    icon: Globe,
    slug: 'web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    slug: 'mobile-development'
  },
  {
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces with React, Vue, or Angular.',
    icon: LayoutGrid,
    slug: 'frontend-development'
  },
  {
    title: 'Backend Development',
    description: 'Scalable server solutions and APIs with Node.js, Python, or Java.',
    icon: Code,
    slug: 'backend-development'
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your existing applications and improve user experience.',
    icon: Rocket,
    slug: 'performance-optimization'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and improvements for your digital products.',
    icon: RefreshCw,
    slug: 'maintenance-support'
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50/50 relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #0284c7 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-syncsoft-700 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive development solutions to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a key={service.title} href={`/service/${service.slug}`}>
              <Card
                className={`group relative border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transitionProperty: 'all',
                  transitionDuration: '0.6s'
                }}
              >
                {/* Hover gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-syncsoft-500 to-syncsoft-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-syncsoft-100 to-syncsoft-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-syncsoft-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-syncsoft-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
