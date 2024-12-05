"use client";

import { Email, Instagram, Phone, WhatsApp } from "@mui/icons-material";

export default function ContactSection() {
  return (
    <section 
    id="contact"
    className="relative flex flex-col items-center justify-between min-h-screen text-white px-6">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #1c3b72, #091057)",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#d1d5db] mb-4 text-left">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-4 text-left">
            Let&apos;s collaborate on something amazing. Feel free to reach out!
          </p>

          {/* First line under the description - Align it to the start of the text */}
          <hr className="w-full sm:w-[90%] md:w-[80%] border-gray-400 mx-0 mb-6" />
        </div>

        {/* Page layout divided in two */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left: Message form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <label className="block">
                <span className="text-gray-300">Name</span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </label>
              <label className="block">
                <span className="text-gray-300">Email</span>
                <input
                  type="email"
                  className="w-full mt-2 p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </label>
              <label className="block">
                <span className="text-gray-300">Message</span>
                <textarea
                  rows={5}
                  className="w-full mt-2 p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                ></textarea>
              </label>
              <button
                type="submit"
                className="w-full p-3 bg-transparent border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-gray-400 h-4/5"></div>

          {/* Right: Contact details */}
          <div className="w-full md:w-1/2 space-y-8 text-left">
            {/* About section */}
            <div className="text-left">
              <p className="text-gray-300">
                Hi, I&apos;m Emmanuel. A passionate developer skilled in React, Next.js, and more.
                Let&apos;s build something awesome together!
              </p>
            </div>
            <hr className="w-full sm:w-[90%] md:w-[80%] border-gray-400 mx-0 mb-6" />

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone style={{ fontSize: 30, color: "#4ade80" }} />
                <p className="text-lg sm:text-xs md:text-lg text-gray-300">+234 703 931 2869</p>
              </div>
              <div className="flex items-center space-x-4">
                <Email style={{ fontSize: 30, color: "#f87171" }} />
                <p className="text-lg sm:text-xs md:text-lg text-gray-300">omegasantiago444@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
               {/* Instagram Icon with Link */}
                  <a
                    href="https://www.instagram.com/just_omega__"
                        target="_blank"
                        rel="noopener noreferrer"
                         className="flex items-center space-x-2"
                                >
                          <Instagram style={{ fontSize: 30, color: "#ec4899" }} />
                              <p className="text-lg sm:text-xs md:text-lg text-gray-300"> @just_omega__</p>
                            </a>
                </div>

              <div className="flex items-center space-x-4">
                <WhatsApp style={{ fontSize: 30, color: "#4ade80" }} />
                <p className="text-lg sm:text-xs md:text-lg text-gray-300">+234 703 931 2869</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-transparent py-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Emmanuel. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

