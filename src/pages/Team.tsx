
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Full-Stack Developer',
    bio: 'With over 8 years of experience in software development, Alex leads our team with expertise in React, Node.js, and cloud architecture. Passionate about creating scalable solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alex@syncsoft.dev'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Frontend Developer',
    bio: 'Sarah is a UI/UX enthusiast with 6 years of experience creating beautiful, responsive interfaces. She specializes in React, Vue.js, and modern CSS frameworks.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b287?w=300&h=300&fit=crop&crop=face',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'Figma', 'JavaScript'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah@syncsoft.dev'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Backend Developer',
    bio: 'Michael brings 5 years of backend development expertise, specializing in API design, database optimization, and microservices architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    skills: ['Python', 'Java', 'PostgreSQL', 'Docker', 'Kubernetes'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'michael@syncsoft.dev'
    }
  }
];

const Team = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The talented individuals behind SyncSoft's success. We're a small but mighty team passionate about delivering exceptional software solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-syncsoft-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <CardDescription className="text-syncsoft-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Expertise</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-syncsoft-100 text-syncsoft-700 rounded-md text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${member.social.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always excited to take on new challenges and create innovative solutions. Let's discuss your next project!
            </p>
            <Button size="lg" className="bg-syncsoft-600 hover:bg-syncsoft-700">
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
