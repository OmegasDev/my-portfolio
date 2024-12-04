"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const skills = [
    { name: "React", description: "Frontend Framework" },
    { name: "Next.js", description: "Fullstack Framework" },
    { name: "JavaScript", description: "Programming Language" },
    { name: "Tailwind CSS", description: "CSS Framework" },
    { name: "Python", description: "Backend Programming" },
    { name: "Node.js", description: "Backend Framework" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden bg-skill_bg"
    >
      {/* Rotating Circles */}
      {Array.from({ length: 7 }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute border-[2px] rounded-full`}
          style={{
            width: `${150 + index * 50}px`,
            height: `${150 + index * 50}px`,
            borderColor: `rgba(128,90,213,${0.7 - index * 0.1})`,
            clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)",
          }}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            repeat: Infinity,
            duration: 10 + index * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Header */}
      <div
        className="absolute top-4 md:top-8 bg-transparent border border-purple-500 text-white text-center rounded-full px-8 py-2 mx-auto shadow-[0_0_10px_rgba(128,90,213,0.5)]"
        style={{ width: "fit-content", height: "auto" }}
        data-aos="fade-down"
      >
        <h1 className="text-sm md:text-lg font-bold">My Skills</h1>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        {/* Skills Container */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-transparent border border-purple-500 rounded-md shadow-[0_0_15px_5px_rgba(128,90,213,0.5)]"
            >
              {/* Skill Name */}
              <h3 className="text-sm sm:text-base font-bold group-hover:text-purple-300 transition">
                {skill.name}
              </h3>
              {/* Skill Description */}
              <p className="text-xs sm:text-sm opacity-70 group-hover:text-purple-200 transition mt-1">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
