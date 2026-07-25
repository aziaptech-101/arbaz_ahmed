import React from 'react'
import web from "./assets/web.jfif";
import ai from "./assets/ai.webp";
import aien from "./assets/aien.jfif";
import tec from "./assets/tec.jfif";
import ui from "./assets/ui.jfif";
import conn from "./assets/conn.jfif";

export const Services = () => {
  return (
    <>
          <section id="services" className="py-20 relative bg-black text-white overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 opacity-10" style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#39FF14]">Services</span></h2>
      <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        I offer a range of professional services to help businesses and individuals leverage technology effectively.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Web Development",
          description: "Custom website and web application development using modern technologies like React, Angular, and MERN Stack.",
          icon: "fa-laptop-code",
          image: web
        },
        {
          title: "AI Prompt Engineering",
          description: "Specialized services for optimizing GPT-3/GPT-4 and DALL·E prompts to maximize accuracy and performance.",
          icon: "fa-robot",
          image: ai
        },
        {
          title: "AI Integration",
          description: "Enhancing applications with AI capabilities including NLP, content generation, and intelligent automation.",
          icon: "fa-brain",
          image: aien
        },
        {
          title: "Technical Training",
          description: "Comprehensive training programs in web development, AI tools, and modern programming techniques.",
          icon: "fa-chalkboard-teacher",
          image: tec
        },
        {
          title: "UI/UX Design",
          description: "Creating intuitive and visually appealing interfaces using Figma, Adobe XD, and modern design principles.",
          icon: "fa-paint-brush",
          image: ui
        },
        {
          title: "Consulting",
          description: "Strategic guidance on technology adoption, AI implementation, and digital transformation.",
          icon: "fa-handshake",
          image: conn
        }
      ].map((service, index) => (
        <div key={index} className="group perspective-1000">
          <div className="relative h-96 w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
              <div className="h-full relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="w-14 h-14 rounded-full bg-[#39FF14] flex items-center justify-center text-black mb-4">
                    <i className={`fas ${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black border border-[#39FF14]/30 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#39FF14] transition-opacity duration-500 group-hover:opacity-100">{service.title}</h3>
                <p className="text-gray-300 mb-6 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#39FF14] mr-2"></i>
                    <span className="text-gray-300">Industry Best Practices</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#39FF14] mr-2"></i>
                    <span className="text-gray-300">Performance Focused</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#39FF14] mr-2"></i>
                    <span className="text-gray-300">Client-Centric Approach</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto px-6 py-2 bg-[#39FF14] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-300"
              >
                Get This Service
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    
    </>
  )
}
