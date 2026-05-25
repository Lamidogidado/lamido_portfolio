import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  // Professional Cloud & Software Engineering Projects Array
  const projectsData = [

    {
      title: "AWS Cloud Engineering Assistant",
      description:
        "An AI-powered specialized operational assistant built on Amazon Bedrock via PartyRock. It streamlines infrastructure planning, automates shell scripting adjustments, and acts as a deployment companion for modern cloud engineers.",
      technologies: ["AWS", "Amazon Bedrock", "Generative AI", "Cloud Ops"],
      liveLink: "https://partyrock.aws/u/lamido/zhDyfQEnB/Cloud-Engineering-Assistant",
      githubLink: "https://github.com/Lamidogidado/AWS-Cloud-Engineering-Assistant-PartyRock",
    }, 
     {
      title: "AWS Resilient Web Fleet (IaC)",
      description:
        "An Infrastructure as Code (IaC) blueprint that automates the deployment of a highly available, resilient web server tier. Written completely in CloudFormation, it configures custom VPC networking, isolated subnets, an Application Load Balancer, and dynamic Auto Scaling Groups with auto-recovery behavior.",
      technologies: ["CloudFormation", "AWS VPC", "Auto Scaling", "Infrastructure as Code"],
      // Pointing directly to your template code since live hosting is paused
      liveLink: "https://github.com/Lamidogidado/aws-resilient-web-fleet/blob/main/network.yaml", 
      githubLink: "https://github.com/Lamidogidado/aws-resilient-web-fleet",
    },
    {
      title: "Automated Nginx Node Provisioner",
      description:
        "Developed custom Bash automation scripts fed directly into EC2 User Data parameters via the AWS CLI. Orchestrated the complete unattended lifecycle installation, daemon enablement, and structural initialization of Nginx nodes on system boot.",
      technologies: ["AWS CLI", "Bash Scripting", "EC2 User Data", "Linux Admin"],
      liveLink: "https://lamson.tech",
      githubLink: "https://github.com/your-username/aws-ec2-nginx-provisioner", // Update with your repository link
    },
    { 
       title: "Serverless Image Processing Pipeline",
      description:
        "Engineered an event-driven serverless pipeline utilizing AWS Lambda and S3. When an image is uploaded to a source bucket, an S3 event notifications trigger execution of a Lambda function that automatically resizes, optimizes, and stores the processed asset into a target distribution bucket.",
      technologies: ["AWS Lambda", "Amazon S3", "Python / Node.js", "Serverless Architecture"],
      // Links directly to your core backend logic file
      liveLink: "https://github.com/Lamidogidado/Aws-Lambda-S3-image-resizer/blob/main/lambda_function.py", 
      githubLink: "https://github.com/Lamidogidado/Aws-Lambda-S3-image-resizer",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between bg-white/2"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Links Bar */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm flex items-center gap-1"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 font-medium"
                  >
                    {/* Inline GitHub Minimalist SVG Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub Code ↗
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