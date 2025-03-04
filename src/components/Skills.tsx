
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code, Database, FileText, Film, Settings, Terminal } from 'lucide-react';

const Skills = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: ["Python", "Data Structures & Algorithms"]
    },
    {
      category: "AI & Machine Learning",
      icon: <Settings className="h-5 w-5 text-primary" />,
      skills: ["Data Mining", "Machine Learning", "Generative AI"]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      category: "Development Tools",
      icon: <FileText className="h-5 w-5 text-primary" />,
      skills: ["Jupyter Notebook", "Google Colab", "Power BI", "Streamlit"]
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["SQL", "DBMS"]
    },
    {
      category: "Web Technologies",
      icon: <Film className="h-5 w-5 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "Flask"]
    }
  ];

  const certifications = [
    {
      type: "Global Certifications",
      items: [
        { name: "Salesforce AI Associate", date: "Oct 2024", link: "https://drive.google.com/file/d/example1/view" }
      ]
    },
    {
      type: "Other Certifications",
      items: [
        { name: "NPTEL Python for Data Science (NPTEL)", date: "Sept 2024", link: "https://drive.google.com/file/d/example2/view" },
        { name: "Introduction to Data Science with Python (edX)", date: "Apr 2024", link: "https://drive.google.com/file/d/example3/view" },
        { name: "Machine Learning using Python & Scikit-Learn Bootcamp", date: "Jan 2023", link: "https://drive.google.com/file/d/example4/view" },
        { name: "Python Basics – HackerRank", date: "Feb 2025", link: "https://drive.google.com/file/d/example5/view" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">
          Technical <span className="text-shimmer">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="glass-card p-6 md:p-8 rounded-xl bg-white/95 shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Skills & Technologies</h3>
              
              <div className="space-y-8">
                {skillCategories.map((category, index) => {
                  const categoryRef = useScrollReveal<HTMLDivElement>({
                    origin: 'left',
                    delay: 100 + (index * 100),
                  });
                  
                  return (
                    <div key={index} ref={categoryRef} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center gap-2 mb-3">
                        {category.icon}
                        <h4 className="font-semibold">{category.category}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill, i) => (
                          <div 
                            key={i} 
                            className="chip bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors flex items-center justify-center"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8 rounded-xl bg-white/95 shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              
              <div className="space-y-8">
                {certifications.map((certType, index) => {
                  const certTypeRef = useScrollReveal<HTMLDivElement>({
                    origin: 'right',
                    delay: 100 + (index * 100),
                  });
                  
                  return (
                    <div key={index} ref={certTypeRef} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <h4 className="font-semibold mb-3">{certType.type}</h4>
                      <div className="space-y-4">
                        {certType.items.map((cert, i) => (
                          <div 
                            key={i} 
                            className="flex justify-between items-center border-b pb-2 hover:bg-secondary/50 p-2 rounded transition-colors"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-muted-foreground">{cert.date}</p>
                            </div>
                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm flex items-center gap-1"
                            >
                              View Certificate
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
