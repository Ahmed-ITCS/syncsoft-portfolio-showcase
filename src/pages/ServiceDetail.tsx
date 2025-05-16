
import { useParams, useNavigate } from "react-router-dom";
import { Globe, Smartphone, Code, LayoutGrid, Rocket, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";

// Reuse the same services as in Services.tsx
const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications with modern technologies and responsive design. We craft scalable, secure and stunning web experiences that capture your brand and engage your audience.',
    icon: Globe,
    slug: 'web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Our mobile experts turn your vision into beautiful, high-performing apps users love.',
    icon: Smartphone,
    slug: 'mobile-development'
  },
  {
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces with React, Vue, or Angular. We focus on exceptional user experiences and seamless functionality.',
    icon: LayoutGrid,
    slug: 'frontend-development'
  },
  {
    title: 'Backend Development',
    description: 'Scalable server solutions and APIs with Node.js, Python, or Java. Our backends empower your applications with reliability, speed, and robustness.',
    icon: Code,
    slug: 'backend-development'
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your existing applications and improve user experience. We analyze, optimize, and fine-tune for blazing fast speed and efficiency.',
    icon: Rocket,
    slug: 'performance-optimization'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and improvements for your digital products. We keep your apps secure, up-to-date, and running smoothly.',
    icon: RefreshCw,
    slug: 'maintenance-support'
  },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-white rounded-lg shadow-xl px-8 py-14 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Service Not Found</h2>
          <p className="mb-6 text-gray-500">Sorry, we couldn't find that service.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center py-14">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl px-10 py-12 mx-2 border border-gray-100">
        <div className="flex items-center gap-6 mb-6">
          <div className="h-16 w-16 rounded-lg flex items-center justify-center bg-syncsoft-50 shadow-lg">
            <ServiceIcon className="h-8 w-8 text-syncsoft-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
        </div>
        <p className="text-gray-700 text-lg mb-8">{service.description}</p>
        <Button className="bg-syncsoft-700 hover:bg-syncsoft-900 px-7 py-2 rounded-xl font-semibold text-white" onClick={() => navigate("/#services")}>
          Back to Services
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetail;
