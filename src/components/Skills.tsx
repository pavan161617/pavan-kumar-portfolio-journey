
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Data Structures & Algorithms"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["Data Mining", "Machine Learning", "Generative AI"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      category: "Development Tools",
      skills: ["Jupyter Notebook", "Google Colab", "Power BI", "Streamlit"]
    },
    {
      category: "Databases",
      skills: ["SQL", "DBMS"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Flask"]
    }
  ];

  const certifications = [
    {
      type: "Global Certifications",
      items: [
        { name: "Salesforce AI Associate", date: "Oct 2024", link: "Certificate" }
      ]
    },
    {
      type: "Other Certifications",
      items: [
        { name: "NPTEL Python for Data Science (NPTEL)", date: "Sept 2024", link: "Certificate" },
        { name: "Introduction to Data Science with Python (edX)", date: "Apr 2024", link: "Certificate" },
        { name: "Machine Learning using Python & Scikit-Learn Bootcamp", date: "Jan 2023", link: "Certificate" },
        { name: "Python Basics – HackerRank", date: "Feb 2025", link: "Certificate" }
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
                    <div key={index} ref={categoryRef}>
                      <h4 className="font-semibold mb-3">{category.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <div 
                            key={i} 
                            className="chip bg-primary/10 text-primary-foreground border border-primary/20"
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
                    <div key={index} ref={certTypeRef}>
                      <h4 className="font-semibold mb-3">{certType.type}</h4>
                      <div className="space-y-4">
                        {certType.items.map((cert, i) => (
                          <div 
                            key={i} 
                            className="flex justify-between items-center border-b pb-2"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-muted-foreground">{cert.date}</p>
                            </div>
                            <a 
                              href="#" 
                              className="text-primary hover:underline text-sm"
                            >
                              {cert.link}
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
        
        <div 
          className="mt-10 glass-card p-6 md:p-8 rounded-xl bg-white/95 shadow-md"
          ref={useScrollReveal<HTMLDivElement>({
            origin: 'bottom',
            delay: 300,
          })}
        >
          <h3 className="text-xl font-bold mb-4">Interests</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2"></span>
              <span>
                Focused on Artificial Intelligence, Machine Learning, and their real-world applications in automation and decision-making.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2"></span>
              <span>
                Building scalable web applications using frameworks like React, Flask, and TensorFlow.js to optimize performance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2"></span>
              <span>
                Active participant in tech communities and hackathons.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
