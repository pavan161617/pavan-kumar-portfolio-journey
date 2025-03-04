
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-display font-bold tracking-tight"
        >
          Pavan Kumar
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a 
          href="#contact" 
          className="hidden md:flex btn-primary"
        >
          Contact Me <ChevronRight className="ml-1 h-4 w-4" />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span 
              className={cn(
                "w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen && "translate-y-2 rotate-45"
              )} 
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )} 
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen && "-translate-y-2 -rotate-45"
              )} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[69px] right-0 left-0 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 overflow-hidden",
          isScrolled ? "top-[61px]" : "top-[77px]",
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-6 gap-4">
          {navigationItems.map((item, index) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary mt-2 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Me <ChevronRight className="ml-1 h-4 w-4 inline-block" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
