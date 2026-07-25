import React from 'react'

export const Skills = () => {
  return (
   <>
     <section id="skills" className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#39FF14]">Skills</span></h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              I've developed expertise in various programming languages, frameworks, and AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Html Css & Js", percentage: 95, icon: "fa-code" },
              { name: "React", percentage: 90, icon: "fa-robot" },
              { name: "MERN Stack", percentage: 55, icon: "fa-layer-group" },
              { name: "OpenAI & GPT Models", percentage: 90, icon: "fa-brain" },
              { name: "PHP/Laravel", percentage: 40, icon: "fa-server" },
              { name: "UI/UX Design", percentage: 85, icon: "fa-paint-brush" },
            ].map((skill, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-[#39FF14]/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] mr-4 group-hover:bg-[#39FF14]/20 transition-all duration-300">
                    <i className={`fas ${skill.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-[#39FF14]">{skill.percentage}%</p>
                  </div>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-[#39FF14] h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { count: "50+", label: "Projects Completed", icon: "fa-code-branch" },
              { count: "100+", label: "AI Prompts Optimized", icon: "fa-robot" },
              { count: "5+", label: "Years Experience", icon: "fa-calendar-alt" },
              { count: "200+", label: "Students Trained", icon: "fa-users" },
            ].map((stat, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-[#39FF14]/50 transition-all duration-300">
                <div className="text-[#39FF14] text-3xl mb-4">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}
