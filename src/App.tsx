

import arbaz from "./assets/arbaz.png";
import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // We'll define transitions in CSS
import CVDownloadButton from './CVDownloadButton';
import { About } from './About';
import { Skills } from './Skills';
import { Services } from './Services';
import { Project } from './Project';
import { Professional } from './Professional';
import { Contect } from './Contect';
import { Footer } from './Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ["Software Engineer", "AI Specialist", "Prompt Engineer", "Web Developer"];

  const typingRef = useRef({
    charIndex: 0,
    isDeleting: false,
    timeoutId: 0 as any
  });

  useEffect(() => {
    const { charIndex, isDeleting } = typingRef.current;
    const currentPhrase = phrases[currentPhraseIndex];

    const type = () => {
      let newCharIndex = typingRef.current.charIndex;
      let newIsDeleting = typingRef.current.isDeleting;

      if (newIsDeleting) {
        newCharIndex--;
        setTypedText(currentPhrase.substring(0, newCharIndex));
      } else {
        newCharIndex++;
        setTypedText(currentPhrase.substring(0, newCharIndex));
      }

      typingRef.current.charIndex = newCharIndex;

      if (!newIsDeleting && newCharIndex === currentPhrase.length) {
        typingRef.current.isDeleting = true;
        typingRef.current.timeoutId = setTimeout(type, 1000);
      } else if (newIsDeleting && newCharIndex === 0) {
        typingRef.current.isDeleting = false;
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextIndex);
        typingRef.current.timeoutId = setTimeout(type, 500);
      } else {
        typingRef.current.timeoutId = setTimeout(type, newIsDeleting ? 50 : 150);
      }
    };

    typingRef.current.timeoutId = setTimeout(type, 300);

    return () => clearTimeout(typingRef.current.timeoutId);
  }, [currentPhraseIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };


  // Custom cursor effect
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Poppins',sans-serif] relative overflow-x-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-[#39FF14] pointer-events-none z-50 transition-transform duration-100 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
      <div
        className="fixed w-2 h-2 rounded-full bg-[#39FF14] pointer-events-none z-50 transition-transform duration-75 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      {/* Navigation */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white flex items-center cursor-pointer">
            <span className="text-[#39FF14] mr-1">A</span>rbaz
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-sm uppercase tracking-wider cursor-pointer whitespace-nowrap hover:text-[#39FF14] transition-colors ${activeSection === item.toLowerCase() ? 'text-[#39FF14]' : 'text-white'}`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#39FF14]"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-5' : 'max-h-0'}`}>
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm uppercase tracking-wider cursor-pointer whitespace-nowrap hover:text-[#39FF14] transition-colors ${activeSection === item.toLowerCase() ? 'text-[#39FF14]' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <div className="relative hover:animate-smoothJump transition-transform duration-300">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.5)] ">
                  <img
                    src={arbaz}
                    alt="Arbaz Ahmed"
                    className="w-full h-full "
                  />
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#39FF14]/20 to-transparent blur-xl opacity-70 -z-10"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block">I'm <span className="text-[#39FF14]">Arbaz Ahmed</span></span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                <span className="text-[#39FF14]">{typedText}</span><span className="blinking-cursor">|</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <CVDownloadButton/>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-bold rounded-full hover:bg-[#39FF14]/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 transform hover:translate-y-[-3px] !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-[#39FF14] transition-colors cursor-pointer">
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </section>

      {/* About Section */}
    <About/>

      {/* Skills Section */}
    <Skills/>

      {/* Services Section */}

  <Services/>

      {/* Portfolio Section */}
    <Project/>

      {/* Experience Section */}
    <Professional/>

      {/* Contact Section */}
     <Contect/>

      {/* Footer */}
     <Footer/>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#39FF14] text-black flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-300 !rounded-button cursor-pointer"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default App;