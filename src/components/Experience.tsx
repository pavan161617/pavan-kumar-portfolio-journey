
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Experience = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });

  const internships = [
    {
      title: "Web Full Stack Developer",
      company: "EduSkills Academy",
      period: "Jul 2024 - Sep 2024",
      certificate: "Certificate",
      type: "Virtual Internship",
      achievements: [
        "Constructed 10+ dynamic web applications with HTML, CSS, JavaScript, Flask, and SQL",
        "Accelerated website performance, reducing load time by 25% for seamless user experience",
        "Developed responsive UIs, ensuring compatibility across 10+ device formats"
      ]
    },
    {
      title: "Tech",
      company: "VOIS",
      period: "Feb 2024 - Mar 2024",
      certificate: "Certificate",
      type: "Virtual Internship",
      achievements: [
        "Engineered interactive Power BI dashboards, boosting visualization clarity by 30%",
        "Analyzed 1.5M+ data points, identifying patterns that optimized decision-making by 15%",
        "Automated data transformation pipelines, cutting manual efforts by 40% and enhancing productivity"
      ]
    },
    {
      title: "Salesforce Developer",
      company: "",
      period: "Aug 2023 - Oct 2023",
      certificate: "Certificate",
      type: "Virtual Internship",
      achievements: [
        "Streamlined Apex Debugging, Process Automation, and LWC API, reducing debugging time by 30%",
        "Designed workflow automation tools, enhancing operational efficiency by 25%",
        "Attained Developer Super Set certification, validating expertise in advanced Salesforce features"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">
          Work <span className="text-shimmer">Experience</span>
        </h2>
        
        <div className="space-y-10">
          {internships.map((internship, index) => {
            const cardRef = useScrollReveal<HTMLDivElement>({
              origin: index % 2 === 0 ? 'left' : 'right',
              delay: 200 + (index * 100),
            });
            
            return (
              <div 
                key={index}
                ref={cardRef}
                className="glass-card p-6 md:p-8 rounded-xl bg-white/95 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="chip mb-2">{internship.type}</div>
                    <h3 className="text-2xl font-bold">{internship.title}</h3>
                    <p className="text-lg text-muted-foreground">{internship.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="font-medium">{internship.period}</p>
                    <a href="#" className="text-primary hover:underline">
                      {internship.certificate}
                    </a>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {internship.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
