import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project Card Item - You can repeat this or map over an array of project objects */}
            {[1, 2, 3, 4].map((project) => (
              <div 
                key={project}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Cloud Platform {project}</h3>
                <p className="text-gray-400 mb-4">
                  Deploying a fullstack application on AWS Elastic Beanstalk using CI/CD pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span 
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    View Project →
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};