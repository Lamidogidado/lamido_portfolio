import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent leading-tight">
            Muhammad Lamido
          </h1>

          {/* 1. Updated Header to explicitly showcase Cloud & DevOps Engineering */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 tracking-wide">
            Cloud & DevOps Engineer
          </h2>

          <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Bridging the gap between physical network system installations and software-defined architectures. 
            Specializing in designing highly available AWS environments, provisioning automated IaC pipelines, 
            and containerizing microservice topologies.
          </p>

          {/* 2. Interactive Button Action Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 text-sm md:text-base"
            >
              Explore Infrastructure Projects
            </a>
            
            <a
              href="#contact"
              className="border border-white/20 hover:bg-white/5 text-white font-medium py-3 px-6 rounded-lg transition-all hover:-translate-y-0.5 text-sm md:text-base"
            >
              Get In Touch
            </a>

            {/* 3. New Strategic Resume Download Button */}
            <a
              href="/Muhammad_Lamido_Cloud_DevOps_Resume.pdf"
                download="Muhammad_Lamido_Cloud_DevOps_Resume.pdf"
              className="border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-medium py-3 px-6 rounded-lg transition-all hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV / Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};