
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const headingRef = useScrollReveal<HTMLHeadingElement>({
    origin: 'left',
  });
  
  const contentRef = useScrollReveal<HTMLDivElement>({
    origin: 'right',
    delay: 200,
  });
  
  const educationRef = useScrollReveal<HTMLDivElement>({
    origin: 'bottom',
    delay: 400,
  });

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">
          About <span className="text-shimmer">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-7 gap-8">
          <div ref={contentRef} className="md:col-span-3 flex flex-col justify-center">
            <div className="glass-card p-6 rounded-xl bg-white/95 shadow-md">
              <div className="chip mb-4">B.Tech in Computer Science</div>
              <p className="text-lg mb-4">
                I'm a Computer Science student specializing in Artificial Intelligence 
                at Pragati Engineering College. My passion lies in creating effective AI solutions
                and developing web applications that solve real-world problems.
              </p>
              <p className="text-lg">
                With expertise in Python, Data Structures, Machine Learning and Web Development,
                I strive to build innovative solutions that make a difference.
              </p>
            </div>
          </div>
          
          <div ref={educationRef} className="md:col-span-4">
            <div className="glass-card p-6 rounded-xl bg-white/95 shadow-md">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-bold">B.Tech., CSE (AI Specialization)</h4>
                  <p className="text-sm text-muted-foreground">Pragati Engineering College | CGPA: 8.54</p>
                  <p className="text-sm font-medium">Sep 2022 - Present</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-bold">Intermediate (10+2)</h4>
                  <p className="text-sm text-muted-foreground">Narayana Junior College | Percentage: 8.12%</p>
                  <p className="text-sm font-medium">June 2020 - May 2022</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-bold">Secondary (10th Grade)</h4>
                  <p className="text-sm text-muted-foreground">Narayana Concept School | Percentage: 100%</p>
                  <p className="text-sm font-medium">June 2019 - May 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
