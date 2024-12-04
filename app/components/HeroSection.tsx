"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroWithNavbar() {
  const [showNavbar, setShowNavbar] = useState(false); // To toggle navbar visibility with color
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });

    const handleScroll = () => {
      // Show navbar with color if scrolled beyond hero section
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (id: string) => {
    // Close the dropdown
    setIsMenuOpen(false);

    // Scroll to the desired section smoothly
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showNavbar
            ? "bg-[#091057] shadow-[0_4px_20px_rgba(0,255,255,0.5)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div>
            <img
              src="/yt-profile.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Hamburger Menu */}
          <div>
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu (toggle visibility) */}
        {isMenuOpen && (
          <div className="bg-[#091057] text-white p-4 space-y-4">
            <button
              onClick={() => handleMenuClick("about")}
              className="block text-lg font-semibold"
            >
              About Me
            </button>
            <button
              onClick={() => handleMenuClick("contact")}
              className="block text-lg font-semibold"
            >
              Contact
            </button>
            <button
              onClick={() => handleMenuClick("skills")}
              className="block text-lg font-semibold"
            >
              Skills
            </button>
            <button
              onClick={() => handleMenuClick("projects")}
              className="block text-lg font-semibold"
            >
              Projects
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative flex items-center justify-center h-screen text-white"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091057]/50 to-[#091057]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 ">
          <p
            className="text-lg mb-2 font-light tracking-wide md:text-xl"
            data-aos="fade-right"
          >
            Hello there! <span className="animate-wave">👋</span>
          </p>

          <h1
            className="text-5xl font-extrabold tracking-tight md:text-6xl"
            data-aos="fade-left"
          >
            I'm{" "}
            <span className="text-hero_name text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
              Emmanuel
            </span>
          </h1>

          <p
            className="mt-4 text-xl font-medium leading-relaxed md:text-2xl"
            data-aos="fade-up"
          >
            A passionate{" "}
            <span className="text-hero_skill font-semibold underline decoration-blue-500">
              Frontend Developer
            </span>{" "}
            skilled in building modern, user-friendly web applications.
          </p>

          <p
            className="mt-4 text-lg text-gray-300 md:text-xl mb-4"
            data-aos="zoom-in"
          >
            Proficient in{" "}
            <span className="font-semibold text-white italic">React</span>,{" "}
            <span className="font-semibold text-white italic">Next.js</span>,
            and{" "}
            <span className="font-semibold text-white italic">Tailwind CSS</span>
            .
          </p>

          <a
            href="#contact" // Link to contact section
            className="mt-8 px-8 py-3 bg-button_color rounded-full text-white text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            data-aos="flip-up"
          >
            Let's Collaborate
          </a>
        </div>
      </section>
    </>
  );
}

