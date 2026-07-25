import React from 'react'

export const Professional = () => {
  return (
    <>
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-[#39FF14]">Experience</span></h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gradient-to-b before:from-[#39FF14] before:to-transparent">
              {[
                {
                  title: "Faculty Member",
                  company: "Aptech Metro Star",
                  duration: "Ongoing",
                  description: "Design and deliver interactive training on web development and AI tools. Introduced AI prompt engineering techniques, improving student performance by 50%.",
                  icon: "fa-chalkboard-teacher"
                },
                {
                  title: "Technical Instructor",
                  company: "NAVTTC - Government Institute",
                  duration: "3 Months",
                  description: "Taught full-stack development with HTML5, CSS3, JavaScript, PHP, and MySQL. Led hands-on workshops to build dynamic websites and applications.",
                  icon: "fa-laptop-code"
                },
                {
                  title: "CIT Instructor",
                  company: "Arena Multimedia",
                  duration: "7 Months",
                  description: "Delivered comprehensive IT lessons, enhancing student understanding and practical skills. Employed modern teaching methods to improve engagement.",
                  icon: "fa-desktop"
                },
                {
                  title: "Back-End Developer",
                  company: "AG Consultraining Pvt. Ltd.",
                  duration: "4 Months",
                  description: "Contributed to back-end development using PHP, focusing on optimizing user experience. Improved website performance by 50% through code optimization.",
                  icon: "fa-server"
                }
              ].map((exp, index) => (
                <div key={index} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black z-10">
                    <i className={`fas ${exp.icon}`}></i>
                  </div>
                  <div className="bg-black/50 p-6 rounded-lg border border-gray-800 group-hover:border-[#39FF14]/50 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-[#39FF14] mb-2">{exp.company} • {exp.duration}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
