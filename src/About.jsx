import React from "react";
import arbaz from "./assets/arbaz.png";

export const About = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="about" className="py-20 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2286&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-[#39FF14]">Me</span>
            </h2>

            <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src={arbaz}
                  alt="Arbaz Ahmed - Software Engineer"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />

                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#39FF14]/20 to-transparent blur-xl opacity-70 -z-10"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Software Engineer & AI Specialist
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Welcome to my portfolio. I'm Arbaz Ahmed, a passionate Software
                Engineer with strong specialization in AI and Prompt
                Engineering.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                My expertise lies in optimizing AI prompts to boost accuracy and
                performance. I'm adept in web development and programming, with
                practical experience in AI applications and web development
                tools.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Currently, as a faculty member at Aptech, I mentor and train
                students in AI and web development technologies, helping them
                bridge the gap between academia and industry requirements.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-bold text-[#39FF14]">
                    <i className="fas fa-user-graduate mr-2"></i>
                    Education
                  </p>
                  <p className="text-gray-300">Bachelor's (Ongoing)</p>
                </div>

                <div>
                  <p className="font-bold text-[#39FF14]">
                    <i className="fas fa-certificate mr-2"></i>
                    Certification
                  </p>
                  <p className="text-gray-300">ACCP (Aptech)</p>
                </div>

                <div>
                  <p className="font-bold text-[#39FF14]">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Location
                  </p>
                  <p className="text-gray-300">Karachi, Pakistan</p>
                </div>

                <div>
                  <p className="font-bold text-[#39FF14]">
                    <i className="fas fa-language mr-2"></i>
                    Languages
                  </p>
                  <p className="text-gray-300">English, Urdu</p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-[#39FF14] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-300 transform hover:translate-y-[-3px] whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-handshake mr-2"></i>
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};