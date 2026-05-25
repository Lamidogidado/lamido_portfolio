import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-transparent to-black/20">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Completed Professional Name Signature */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Muhammad Lamido
          </h1>
          
          {/* Completed Title Headline */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4 tracking-wide">
            Cloud Infrastructure & Network Systems Engineer
          </h2>

          {/* Completed Profile Description */}
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Bridging the gap between physical network system installations and software-defined architectures. 
            Specializing in designing highly available AWS environments, provisioning automated 
            <span className="text-cyan-400 font-medium"> IaC pipelines</span>, and engineering robust routing topologies.
          </p>

          {/* Completed Action Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
            >
              Explore Infrastructure Projects
            </a>
            <a 
              href="#contact" 
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:bg-blue-500/10 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};