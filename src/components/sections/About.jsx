import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // Pure Infrastructure, Systems Automation, and Platform Engineering Focus
  const coreCloudSkills = ["AWS (EC2, S3, Lambda, SSM)", "Auto Scaling & ALB Architectures", "IAM & Cloud Security"];
  const iacAutomationSkills = ["CloudFormation (IaC)", "Bash System Scripting", "Linux Systems Administration", "Git Version Control"];
  const applicationSkills = ["Node.js Backend Microservices", "Python Scripting", "REST APIs", "VPC Network Topologies"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border bg-white/2 hover:border-blue-500/20 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a **Cloud & Infrastructure Engineer** specializing in automated system provisioning, high-availability resource deployment, and fault-tolerant architecture design. I build resilient pipelines using **Infrastructure as Code (IaC)** blueprints, streamline system operations through low-level shell automation, and engineer event-driven computing pipelines that minimize operations overhead.
            </p>

            {/* Engineering Competency Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cloud Architecture */}
              <div className="rounded-xl p-6 border border-white/5 bg-white/2 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  <span>☁️</span> Cloud Architecture
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreCloudSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* IaC & Automation */}
              <div className="rounded-xl p-6 border border-white/5 bg-white/2 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-4 text-blue-400 flex items-center gap-2">
                  <span>🛠️</span> IaC & Automation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {iacAutomationSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Systems Engineering */}
              <div className="rounded-xl p-6 border border-white/5 bg-white/2 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <span>🖥️</span> Systems Engineering
                </h3>
                <div className="flex flex-wrap gap-2">
                  {applicationSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Industry Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Academic Column */}
            <div className="p-6 rounded-xl border-white/10 border bg-white/2 hover:border-blue-500/10 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="relative pl-4 border-l-2 border-blue-500">
                  <strong className="text-white block text-base">B.Sc. Software Engineering</strong>
                  <span className="text-sm text-blue-400 block mb-1">Bayero University Kano • 2022 - 2026</span>
                  <p className="text-xs text-gray-400 leading-normal">
                    Specialized coursework focusing heavily on Cloud Computing Architectures, Distributed Systems, Operating Systems Administration, and Network Topologies.
                  </p>
                </li>
              </ul>
            </div>

            {/* Professional Practice Column */}
            <div className="p-6 rounded-xl border-white/10 border bg-white/2 hover:border-blue-500/10 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="relative pl-4 border-l-2 border-cyan-400">
                  <strong className="text-white block text-base">Cloud Engineering Intern</strong>
                  <span className="text-sm text-cyan-400 block mb-1">AUA Technologies • 2025 - Present</span>
                  <p className="text-xs text-gray-400 leading-normal">
                    Automated the orchestration, life-cycle scaling, and runtime script execution of dynamic EC2 instance tiers. Worked directly with platform configuration run-commands to maintain infrastructure availability metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};