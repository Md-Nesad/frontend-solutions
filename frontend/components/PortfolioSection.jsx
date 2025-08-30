'use client'
import { projects } from '@/data/projects'
import ProjectModal from '@/modal/ProjectModal'
import { Arrow } from '@/public/Icon'
import Image from 'next/image'
import { useState } from 'react'

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id='portfolio'
      className='bg-[#212428] text-white py-20 px-6 md:px-16 lg:px-42 mt-1'
    >
      {/* Heading */}
      <div className='text-center mb-16'>
        <p className='text-red-500 font-semibold text-sm uppercase mt-2'>
          My Portfolio
        </p>
        <h2 className='text-4xl md:text-4xl font-bold mt-2'>
          Design & Development Highlights
        </h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((item, index) => (
          <div
            key={index}
            className='bg-[#212428] rounded-lg overflow-hidden shadow-[0_0_7px_rgba(255,255,255,0.3)] transition duration-300 relative group'
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              placeholder='blur'
              className='w-full h-48 object-cover hover:scale-110 transition duration-300 ease-in-out'
            />
            <div className='p-5 mb-5'>
              <h3 className='text-[#EE4036] font-medium mb-4'>{item.title}</h3>
              <p className='text-xl font-semibold pr-15 mb-10 text-gray-300 flex items-center gap-2'>
                {item.subtitle}
              </p>

              {/* Hover Arrow */}
              <button
                onClick={() => setSelectedProject(item)}
                className='
                  text-red-500 text-xl absolute bottom-5 left-5
                  opacity-0 translate-x-[-10px]
                  transition-all duration-300 ease-in-out
                  group-hover:opacity-100 group-hover:translate-x-0
                '
              >
                <Arrow />
              </button>
            </div>
          </div>
        ))}
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
  )
}
