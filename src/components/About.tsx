
import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, Star, Users, Coffee, Code } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
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

  const skills = [
    "JavaScript/TypeScript",
    "React & React Native",
    "Node.js & Express",
    "Flutter & Dart",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "MongoDB & PostgreSQL",
    "AWS & Firebase",
    "RESTful API Design",
    "UI/UX Best Practices",
  ];

  const stats = [
    { count: "50+", label: "Projects Completed", icon: Code },
    { count: "20+", label: "Happy Clients", icon: Users },
    { count: "5+", label: "Years Experience", icon: Coffee },
    { count: "4.9", label: "Client Rating", icon: Star },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About SyncSoft
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              SyncSoft is a solo development studio specializing in creating custom web and mobile solutions for businesses of all sizes. With a focus on quality, performance, and user experience, I bring your digital ideas to life.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As an experienced developer, I combine technical expertise with business insight to deliver solutions that not only look great but also drive results. My goal is to be more than just a developer – I aim to be a technology partner for your business.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Why Choose SyncSoft?
              </h3>
              <ul className="space-y-3">
                {[
                  "Personalized approach with direct communication",
                  "Commitment to quality and attention to detail",
                  "End-to-end development from concept to deployment",
                  "Focus on performance and scalability",
                  "Ongoing support and maintenance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-syncsoft-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="bg-syncsoft-600 hover:bg-syncsoft-700">
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
          
          {/* Skills & Stats */}
          <div>
            <div
              className={`bg-white p-8 rounded-xl shadow-lg mb-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-syncsoft-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Skills & Expertise
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-syncsoft-600" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.count}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
