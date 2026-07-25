import React from 'react'

export const Footer = () => {
  return (
   <>
    <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-white flex items-center cursor-pointer">
                <span className="text-[#39FF14] mr-1">A</span>rbaz Ahmed
              </a>
              <p className="text-gray-400 mt-2">Software Engineer | AI & Prompt Engineering Specialist</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
              <a href="#home" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">Home</a>
              <a href="#about" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">About</a>
              <a href="#skills" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">Skills</a>
              <a href="#services" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">Contact</a>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arbaz-ahmed-ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/aziaptech-101" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Arbaz Ahmed. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#39FF14] text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#39FF14] text-sm transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#39FF14] text-sm transition-colors cursor-pointer">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}
