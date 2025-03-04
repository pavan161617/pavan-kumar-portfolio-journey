
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });
  
  const contactCardRef = useScrollReveal<HTMLDivElement>({
    origin: 'bottom',
    delay: 200,
  });

  const contactInfo = [
    { label: "Phone", value: "+91 9989315952" },
    { label: "Email", value: "pavan90990@gmail.com" },
    { label: "Email (Academic)", value: "22a31a43g6@pragati.ac.in" },
  ];
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pavan-kumar-b7639125a/" },
    { name: "GitHub", url: "https://github.com/pavan161617" },
    { name: "LeetCode", url: "https://leetcode.com/u/Pavan_kumar_16/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/22A31A43G6" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">
          Get in <span className="text-shimmer">Touch</span>
        </h2>
        
        <div 
          ref={contactCardRef}
          className="max-w-3xl mx-auto glass-card p-8 md:p-10 rounded-xl bg-white/95 shadow-md"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-center py-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold">Ready to work together?</h4>
                <p className="text-muted-foreground">Let's discuss your project</p>
              </div>
              <a 
                href="mailto:pavan90990@gmail.com" 
                className="btn-primary text-center"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
