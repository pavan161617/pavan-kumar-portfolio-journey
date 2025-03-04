
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold tracking-tight">Pavan Kumar</h3>
            <p className="text-primary-foreground/70 mt-2">
              B.Tech. in Computer Science with AI Specialization
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <button 
              onClick={scrollToTop} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors mb-4"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            
            <p className="text-primary-foreground/70 text-sm">
              &copy; {currentYear} Ponnaganti Pavan Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
