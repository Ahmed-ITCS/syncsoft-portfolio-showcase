
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration and inventory management.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230284c7'/%3E%3Cpath d='M300 120 L360 220 L240 220 Z' fill='white'/%3E%3Crect x='260' y='240' width='80' height='80' fill='white'/%3E%3C/svg%3E",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "web",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with user authentication.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230284c7'/%3E%3Cpolygon points='300,100 400,250 200,250' fill='white'/%3E%3Crect x='270' y='250' width='60' height='80' fill='white'/%3E%3C/svg%3E",
    tags: ["reactnative.js", "Django", "PostgreSQL"],
    type: "web",
  },
  {
    title: "Restaurant Ordering System",
    description: "Online ordering and table reservation system for restaurants.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230284c7'/%3E%3Ccircle cx='300' cy='200' r='120' fill='white' stroke='%230284c7' stroke-width='30'/%3E%3C/svg%3E",
    tags: ["React", "Express", "MySQL"],
    type: "web",
  },
 
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = projects.filter(
    project => filter === 'all' || project.type === filter
  );

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
      id="portfolio"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore some of our recent projects and success stories
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              className={filter === 'all' ? 'bg-syncsoft-600' : ''}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'web' ? 'default' : 'outline'}
              className={filter === 'web' ? 'bg-syncsoft-600' : ''}
              onClick={() => setFilter('web')}
            >
              <Globe className="mr-2 h-4 w-4" />
              Web
            </Button>
            <Button
              variant={filter === 'mobile' ? 'default' : 'outline'}
              className={filter === 'mobile' ? 'bg-syncsoft-600' : ''}
              onClick={() => setFilter('mobile')}
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transitionProperty: 'all',
                transitionDuration: '0.5s'
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-2">
                  {project.type === 'web' ? (
                    <Globe className="h-4 w-4 text-syncsoft-600 mr-2" />
                  ) : (
                    <Smartphone className="h-4 w-4 text-syncsoft-600 mr-2" />
                  )}
                  <h3 className="font-bold text-xl">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 px-6 py-3">
                <Button variant="ghost" size="sm" className="text-syncsoft-600">
                  <Code className="mr-2 h-4 w-4" />
                  
                </Button>
                <Button variant="link" size="sm" className="ml-auto text-syncsoft-600">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-syncsoft-600 hover:bg-syncsoft-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
