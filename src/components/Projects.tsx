
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Projects = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });

  const projects = [
    {
      title: "Movie Recommendation System",
      description: "Python-based recommendation engine using Scikit-learn that processes 10,000+ movie datasets for accurate suggestions.",
      achievements: [
        "Devised a Python-based recommendation engine using Scikit-learn, increasing engagement by 20%",
        "Processed 10,000+ movie datasets, enabling faster and more accurate suggestions",
        "Integrated collaborative filtering techniques, refining prediction accuracy by 18%"
      ],
      link: "GitHub",
      technologies: ["Python", "Scikit-learn", "Data Mining", "Machine Learning"]
    },
    {
      title: "Data Structure & Algorithm Visualizer",
      description: "Interactive visualization tool for understanding algorithms and data structures with customizable inputs.",
      achievements: [
        "Visualizes 8 Data Structures – Demonstrates arrays, stacks, queues, searching, sorting, greedy algorithms, backtracking, and graph algorithms for better understanding",
        "Handles 50+ User Inputs – Allows customization of array size, speed, and values for precise execution control",
        "Logs 500+ Interactions – Tracks clicks, selections, and operations across multiple localhost instances to enhance user engagement"
      ],
      link: "GitHub",
      technologies: ["JavaScript", "HTML", "CSS", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">
          Featured <span className="text-shimmer">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const projectRef = useScrollReveal<HTMLDivElement>({
              origin: 'bottom',
              delay: 200 + (index * 150),
            });
            
            return (
              <div 
                key={index}
                ref={projectRef}
                className="glass-card rounded-xl bg-white/95 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="chip text-xs">{tech}</span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View on {project.link} <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
