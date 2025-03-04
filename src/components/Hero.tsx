
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hero = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'top',
    delay: 100,
  });
  
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({
    origin: 'top',
    delay: 300,
  });
  
  const ctaRef = useScrollReveal<HTMLDivElement>({
    origin: 'bottom',
    delay: 500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight mb-6"
        >
          <span className="block">PONNAGANTI</span>
          <span className="text-shimmer">PAVAN KUMAR</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          B.Tech. in Computer Science with specialization in Artificial Intelligence.
          Passionate about developing AI solutions and web applications.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#about" className="btn-primary w-full sm:w-auto animate-float">
            Explore My Work <ArrowRight className="ml-2 h-4 w-4 inline-block" />
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
