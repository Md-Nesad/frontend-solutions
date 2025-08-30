'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectModal({ isOpen, onClose, project }) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % project.images.length)
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={onClose} // close when clicking outside
    >
      <div
        className='relative w-full max-w-5xl bg-[#1E1E1E] rounded-2xl p-6 text-gray-300 max-h-[90vh] shadow-lg overflow-y-auto scrollbar-hide'
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
      >
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 text-gray-400 hover:text-white'
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Image Slider */}
          <div className='relative rounded-lg overflow-hidden flex-shrink-0 lg:w-2/3'>
            <Image
              src={project.images[current]}
              alt='project'
              width={900}
              height={500}
              placeholder='blur'
              loading='lazy'
              className='w-full h-72 object-cover rounded-lg'
            />
            {/* Left Arrow */}
            <button
              className='absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full'
              onClick={prevSlide}
            >
              <ChevronLeft />
            </button>
            {/* Right Arrow */}
            <button
              className='absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full'
              onClick={nextSlide}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Project Info */}
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold text-white'>
              {project.subtitle}
            </h2>
            <p className='text-gray-400 mt-2'>{project.describe}</p>

            <div className='grid sm:grid-cols-2 gap-4 mt-4 text-sm'>
              <p>
                <span className='font-semibold text-white'>Client:</span>{' '}
                {project.clientName}
              </p>
              <p>
                <span className='font-semibold text-white'>Date:</span>{' '}
                {project.dateLabel}
              </p>
              <p>
                <span className='font-semibold text-white'>Service:</span>{' '}
                {project.service}
              </p>
              <p>
                <span className='font-semibold text-white'>Budget:</span> $
                {project.budget}
              </p>
            </div>

            {/* Buttons */}
            <div className='flex gap-4 mt-6'>
              <button className='px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md'>
                Contact me
              </button>
              <button className='px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md'>
                Rate me
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='mt-8 text-gray-300 leading-relaxed space-y-4 text-sm'>
          <p>{project.paragraphOne}</p>
          <p>{project.paragraphTwo}</p>

          {/* Extra Images */}
          <div className='grid sm:grid-cols-2 gap-6 mt-8'>
            <Image
              src={project.images[1]}
              alt='project2'
              width={500}
              height={300}
              className='rounded-lg object-cover w-full'
            />
            <Image
              src={project.images[2]}
              alt='project3'
              width={500}
              height={300}
              className='rounded-lg object-cover w-full'
            />
          </div>
          <p>{project.paragraphThree}</p>
          <p>{project.paragraphFour}</p>
          <p>{project.paragraphFive}</p>

          <p>{project.paragraphSix}</p>
        </div>
      </div>
    </div>
  )
}
