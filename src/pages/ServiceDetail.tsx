
import { useParams } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Code, 
  LayoutGrid, 
  Rocket, 
  RefreshCw,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    icon: Globe,
    description: 'Custom websites and web applications with modern technologies and responsive design.',
    fullDescription: 'We create cutting-edge web applications using the latest technologies like React, Vue.js, and Angular. Our team specializes in building responsive, fast, and SEO-optimized websites that deliver exceptional user experiences across all devices.',
    features: [
      'Responsive Design',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    pricing: 'Starting from $2,500',
    timeline: '4-8 weeks'
  },
  'mobile-development': {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    fullDescription: 'Our mobile development team creates innovative apps for both iOS and Android platforms. We use React Native and Flutter for cross-platform solutions, as well as native development for optimal performance.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    pricing: 'Starting from $3,500',
    timeline: '6-12 weeks'
  },
  'frontend-development': {
    title: 'Frontend Development',
    icon: LayoutGrid,
    description: 'Pixel-perfect, responsive interfaces with React, Vue, or Angular.',
    fullDescription: 'We craft beautiful, intuitive user interfaces that engage users and drive conversions. Our frontend experts focus on creating seamless user experiences with modern design principles.',
    features: [
      'UI/UX Design Implementation',
      'Component Libraries',
      'State Management',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Accessibility Features'
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'SASS', 'Tailwind CSS', 'Webpack'],
    pricing: 'Starting from $2,000',
    timeline: '3-6 weeks'
  },
  'backend-development': {
    title: 'Backend Development',
    icon: Code,
    description: 'Scalable server solutions and APIs with Node.js, Python, or Java.',
    fullDescription: 'We build robust, scalable backend systems that power your applications. Our team excels in creating RESTful APIs, microservices, and database architectures that grow with your business.',
    features: [
      'RESTful API Development',
      'Database Design & Optimization',
      'Authentication & Security',
      'Cloud Integration',
      'Microservices Architecture',
      'Real-time Features'
    ],
    technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS'],
    pricing: 'Starting from $3,000',
    timeline: '4-8 weeks'
  },
  'performance-optimization': {
    title: 'Performance Optimization',
    icon: Rocket,
    description: 'Speed up your existing applications and improve user experience.',
    fullDescription: 'We analyze and optimize your existing applications to improve loading times, user experience, and search engine rankings. Our optimization process can significantly boost your application performance.',
    features: [
      'Performance Auditing',
      'Code Optimization',
      'Database Tuning',
      'Caching Strategies',
      'CDN Integration',
      'Core Web Vitals Improvement'
    ],
    technologies: ['Lighthouse', 'WebPageTest', 'Redis', 'CDN', 'Image Optimization'],
    pricing: 'Starting from $1,500',
    timeline: '2-4 weeks'
  },
  'maintenance-support': {
    title: 'Maintenance & Support',
    icon: RefreshCw,
    description: 'Ongoing support, updates, and improvements for your digital products.',
    fullDescription: 'Keep your applications running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, and feature enhancements.',
    features: [
      '24/7 Monitoring',
      'Security Updates',
      'Bug Fixes',
      'Feature Enhancements',
      'Backup & Recovery',
      'Technical Support'
    ],
    technologies: ['Monitoring Tools', 'CI/CD', 'Docker', 'Kubernetes', 'Git'],
    pricing: 'Starting from $800/month',
    timeline: 'Ongoing'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Button asChild>
              <a href="/">Go Back Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-syncsoft-50 to-syncsoft-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button variant="ghost" asChild className="mb-6">
                <a href="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </a>
              </Button>
              <div className="h-16 w-16 rounded-full bg-syncsoft-600 flex items-center justify-center mx-auto mb-6">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-syncsoft-600 hover:bg-syncsoft-700">
                  <a href="#contact">Get Started</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#details">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section id="details" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                  <CardDescription>
                    What's included in our {service.title.toLowerCase()} service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-syncsoft-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Technologies Used</CardTitle>
                  <CardDescription>
                    Modern tools and frameworks we utilize
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-syncsoft-100 text-syncsoft-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-syncsoft-600 mb-2">
                    {service.pricing}
                  </p>
                  <p className="text-gray-600">
                    Custom quotes available based on requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-syncsoft-600 mb-2">
                    {service.timeline}
                  </p>
                  <p className="text-gray-600">
                    Depending on project complexity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <Button size="lg" className="bg-syncsoft-600 hover:bg-syncsoft-700">
              <a href="/#contact">Contact Us Today</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
