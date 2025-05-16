
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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive development solutions to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ring-1 ring-syncsoft-100 hover:ring-syncsoft-300 bg-white group ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transitionProperty: 'all',
                transitionDuration: '0.5s'
              }}
              onClick={() => handleServiceClick(service.slug)}
              tabIndex={0}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(service.slug);
                }
              }}
            >
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-syncsoft-50 flex items-center justify-center mb-4 group-hover:bg-syncsoft-100 transition-colors">
                  <service.icon className="h-6 w-6 text-syncsoft-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
