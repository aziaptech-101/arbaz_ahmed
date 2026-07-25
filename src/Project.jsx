import React from 'react'

export const Project = () => {
  return (
   <>
   
   <section id="portfolio" className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#39FF14]">Projects</span></h2>
            <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              A selection of my recent projects showcasing my technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "365 creative studio",
                category: "Front End",
                image: "src/assets/Screenshot (9).png",
                link: "https://365creativestudio.com/index.html"
              },
              {
                title: "E-Commerce Platform",
                category: "React Application",
                image: "src/assets/Screenshot (1).png",
                link: "https://eproject-anime.netlify.app/"
              },
              {
                title: "Gamming website",
                category: "Front End",
                image: "src/assets/Screenshot (4).png",
                link: "https://gamming-web.netlify.app/"
              },
              {
                title: "Portfolio",
                category: "React",
                image: "src/assets/Screenshot (5).png",
                link: "https://hasnainkhan11010x.netlify.app/"
              },
              {
                title: "Resturan",
                category: "Front End",
                image: "src/assets/Screenshot (6).png",
                link: "https://resturn101.netlify.app/"
              },
              {
                title: "Sport",
                category: "Front End",
                image: "src/assets/Screenshot (7).png",
                link: "https://sportweb101.netlify.app/"
              },

               {
                title: "Water Park",
                category: "Bootstrap",
                image: "src/assets/water.png",
                link: "https://sportweb101.netlify.app/"
              },
               {
                title: "Ai Voice Asststance",
                category: "Jawascript",
                image: "src/assets/ai.png",
                link: "https://ai-project-azi.netlify.app/"
              },
               {
                title: "Portofolio",
                category: "Html Css Jquery",
                image: "src/assets/Screenshot (21).png",
                link: "https://aziportfolio-e12eb.firebaseapp.com/"
              },
              
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#39FF14] text-sm mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black cursor-pointer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  )
}
