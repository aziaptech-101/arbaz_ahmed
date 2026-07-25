import React from 'react'

export const Contect = () => {
  return (
    <section id="contact" className="py-20 bg-black relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-[#39FF14]">Touch</span></h2>
        <div className="w-20 h-1 bg-[#39FF14] mx-auto"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div className="bg-black/50 p-8 rounded-xl border border-gray-800 h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">Bagh-e-Korangi, Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">arbazkhan303639@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] mr-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">+92 318 2558559</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Availability</h4>
                  <p className="text-gray-300">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/arbaz-khan-227521231" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-colors cursor-pointer">
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
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-black/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                    <i className="fas fa-user"></i>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/30 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] focus:outline-none transition-colors"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/30 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] focus:outline-none transition-colors"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                    <i className="fas fa-tag"></i>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-black/30 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] focus:outline-none transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none text-gray-400">
                    <i className="fas fa-comment-alt"></i>
                  </div>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black/30 border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] focus:outline-none transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="w-full px-8 py-3 bg-[#39FF14] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.7)] transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
