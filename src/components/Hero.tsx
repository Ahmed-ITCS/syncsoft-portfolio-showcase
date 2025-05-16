
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

// Large animated blob background SVG component
const AnimatedBlobs = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Blob 1 */}
    <svg
      className="absolute -top-24 -left-24 animate-pulse-slow opacity-60"
      width="430"
      height="430"
      viewBox="0 0 430 430"
      fill="none"
    >
      <ellipse cx="215" cy="215" rx="200" ry="170" fill="url(#blob1)" />
      <defs>
        <linearGradient id="blob1" x1="0" y1="0" x2="430" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
    </svg>
    {/* Blob 2 */}
    <svg
      className="absolute top-40 right-0 animate-pulse-slow delay-300 opacity-40"
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
    >
      <ellipse cx="150" cy="120" rx="120" ry="100" fill="url(#blob2)" />
      <defs>
        <linearGradient id="blob2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0f9ff" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
    {/* Blob 3 */}
    <svg
      className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-50 animate-pulse-slow"
      width="400"
      height="230"
      viewBox="0 0 400 230"
      fill="none"
    >
      <ellipse cx="200" cy="170" rx="160" ry="60" fill="url(#blob3)" />
      <defs>
        <linearGradient id="blob3" x1="0" y1="0" x2="400" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0369a1" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center bg-gradient-to-br from-syncsoft-700 via-syncsoft-600 to-syncsoft-500 text-white pt-20 md:pt-32 overflow-hidden"
    >
      {/* Decorative blobs for visual flair */}
      <AnimatedBlobs />

      {/* Glassmorphic + blurred gradient foreground */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=1080&q=80')] bg-cover bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-syncsoft-800/80 via-syncsoft-700/80 to-syncsoft-600/80"></div>
      </div>
      
      {/* Content Card */}
      <div className="container mx-auto px-4 z-20 flex justify-center w-full">
        <div className="relative max-w-3xl mx-auto text-center p-10 rounded-[3rem] backdrop-blur-2xl bg-white/10 ring-2 ring-syncsoft-200/30 shadow-2xl border border-white/10 animate-fade-in overflow-hidden">
          {/* Floating animated accent circle */}
          <div className="absolute top-4 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-syncsoft-400 via-syncsoft-300 to-syncsoft-200 opacity-40 blur-xl pointer-events-none animate-bounce-slow" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient-primary animate-text-gradient bg-gradient-to-br from-syncsoft-200 via-white to-syncsoft-400 bg-clip-text text-transparent drop-shadow-md tracking-tight">
            Transforming <span className="bg-gradient-to-r from-syncsoft-200 via-syncsoft-100 to-white bg-clip-text text-transparent">Ideas</span>{' '}
            into <span className="bg-gradient-to-r from-white via-syncsoft-200 to-syncsoft-400 bg-clip-text text-transparent">Digital Reality</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90 font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Professional <span className="font-semibold text-syncsoft-200">web</span> &amp; <span className="font-semibold text-syncsoft-200">mobile</span> development crafted for your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-white text-syncsoft-700 hover:bg-syncsoft-200 font-semibold hover:scale-105 transition-transform shadow-lg ring-2 ring-syncsoft-200/60 ring-offset-2"
            >
              <a href="#portfolio" className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="h-5 w-5 -rotate-45 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white/90 hover:bg-white/10 hover:scale-105 transition-transform ring-1 ring-syncsoft-200/40"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Ground shadow gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/95 to-transparent pointer-events-none z-30"></div>
      {/* Extra: subtle floating overlay for glow effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-white/30 via-transparent to-white/10 blur-xl opacity-40" />
      </div>
      <style>
        {`
          .animate-pulse-slow {
            animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
          }
          .animate-bounce-slow {
            animation: bounce 3s infinite alternate cubic-bezier(.4,0,.6,1);
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1);}
            50% { transform: scale(1.07);}
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-12px);}
          }
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
    </section>
  );
};

export default Hero;
