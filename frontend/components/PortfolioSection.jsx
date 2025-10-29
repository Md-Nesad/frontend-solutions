"use client";
import { projects } from "@/data/projects";
import ProjectModal from "@/modal/ProjectModal";
import { Arrow } from "@/public/Icon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Each project has its own current image index
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

  const nextSlide = (index, item) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] = (prev[index] + 1) % item.images.length;
      return updated;
    });
  };

  const prevSlide = (index, item) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] =
        (prev[index] - 1 + item.images.length) % item.images.length;
      return updated;
    });
  };

  return (
    <section
      id="portfolio"
      className="bg-[#212428] text-white py-20 px-6 md:px-16 lg:px-42 mt-1"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-red-500 font-semibold text-sm uppercase mt-2">
          My Portfolio <span className="text-green-600">(Client Projects)</span>
        </p>
        <h2 className="text-4xl md:text-4xl font-bold mt-2">
          Design & Development Highlights
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-[#212428] rounded-lg overflow-hidden shadow-[0_0_7px_rgba(255,255,255,0.3)] transition duration-300 relative group"
          >
            <div className="relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.images[currentIndexes[index]]}
                alt="project"
                width={900}
                height={500}
                placeholder="blur"
                loading="lazy"
                className="w-full h-72 object-cover rounded-lg"
              />

              {/* Left Arrow */}
              <button
                className="
      absolute top-1/2 left-1 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
      opacity-0 translate-x-[-10px] pointer-events-none
      group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
      transition-all duration-300 ease-in-out
    "
                onClick={() => prevSlide(index, item)}
              >
                <ChevronLeft />
              </button>

              {/* Right Arrow */}
              <button
                className="
      absolute top-1/2 right-1 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
      opacity-0 translate-x-[10px] pointer-events-none
      group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
      transition-all duration-300 ease-in-out
    "
                onClick={() => nextSlide(index, item)}
              >
                <ChevronRight />
              </button>
            </div>

            <div className="p-5 mb-5">
              <h3 className="text-[#EE4036] font-medium mb-4">{item.title}</h3>
              <p className="text-xl font-semibold pr-15 mb-10 text-gray-300 flex items-center gap-2">
                {item.subtitle}
              </p>

              {/* Hover Arrow */}
              <button
                onClick={() => setSelectedProject(item)}
                className="
                  text-red-500 text-xl absolute bottom-5 left-5
                  opacity-0 translate-x-[-10px]
                  transition-all duration-300 ease-in-out
                  group-hover:opacity-100 group-hover:translate-x-0
                "
              >
                <Arrow />
              </button>
            </div>
          </div>
        ))}
        {/* Portfolio Link */}
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-300 text-lg">
          To see my personal projects, visit{" "}
          <a
            href="https://nesad-portfolio-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE4036] hover:text-red-500 underline transition-colors duration-300"
          >
            nesad-portfolio-website.vercel.app
          </a>
        </p>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
