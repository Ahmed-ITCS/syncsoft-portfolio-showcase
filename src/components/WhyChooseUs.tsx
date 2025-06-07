
import { useState, useEffect, useRef } from 'react';
import { 
  Trophy, 
  Clock, 
  Users, 
  Shield,
  Zap,
  Heart
} from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'Proven Excellence',
    description: 'Award-winning solutions with a track record of successful projects across various industries.',
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your deadlines and consistently deliver high-quality work within agreed timeframes.',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with deep expertise in modern technologies and best practices.',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure robust, reliable applications.',
    gradient: 'from-green-400 to-green-600'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'We leverage the latest technologies and frameworks to build future-ready solutions.',
    gradient: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build long-term partnerships based on trust and results.',
    gradient: 'from-red-400 to-pink-500'
  }
];

const WhyChooseUs = () => {
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
      id="why-choose-us"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-syncsoft-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-syncsoft-700 to-gray-900 bg-clip-text text-transparent">
            Why Choose SyncSoft?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We don't just build applications — we craft digital experiences that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group relative bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.15}s`,
                transitionProperty: 'all',
                transitionDuration: '0.6s'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[1px]">
                <div className={`w-full h-full bg-gradient-to-r ${reason.gradient} rounded-2xl opacity-20`}></div>
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${reason.gradient} mb-6 shadow-lg`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-syncsoft-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-700 font-medium">Ready to get started?</span>
            <a
              href="#contact"
              className="bg-gradient-to-r from-syncsoft-600 to-syncsoft-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
