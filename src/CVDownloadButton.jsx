import React from 'react';

const CVDownloadButton = () => {
  return (
    <a
      href="/ArbazCV.pdf"
      download="ArbazAhmed-4.pdf"
      className="px-8 py-3 bg-[#39FF14] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap cursor-pointer flex items-center"
    >
      <i className="fas fa-download mr-2"></i> Download CV
    </a>
  );
};

export default CVDownloadButton;
