"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio built with React and Tailwind CSS.",
      link: "#",
      image: "/portfolio.png",
    },
    {
      title: "Google page clone",
      description: "A google front page clone",
      link: "https://omegasdev.github.io/google-page-clone/",
      image: "/google-page-clone.png",
    },
   
    {
      title: "Code snippet site",
      description: "A code snippet website.",
      link: "https://23-code-du8jknlid-omegasdevs-projects-62da4e8f.vercel.app/",
      image: "/project.png",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #091057, #1c3b72)",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-right">
          Projects
        </h2>
        <p className="text-lg mb-8" data-aos="fade-left">
          A showcase of my work
        </p>

        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          emulateTouch
          stopOnHover
          showStatus={false}
          showIndicators={false}
          className="custom-carousel"
          centerMode
          centerSlidePercentage={100} // Default for one item on mobile
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-2" // mx-2 adds gap
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-64"
                width={600}
                height={256}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="bg-white text-black rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">{activeProject?.title}</h3>
            <p className="mb-4">{activeProject?.description}</p>
            <a
              href={activeProject?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              View Project
            </a>
            <button
              className="mt-4 inline-block px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
