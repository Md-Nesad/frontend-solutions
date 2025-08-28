'use client'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Michael Anderson',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'UI/UX and frontend development at Pixell BD is exceptional. He transformed our concepts into a seamless digital experience, delivering a polished product ahead of schedule.',
  },
  {
    id: 2,
    name: 'Sophia Carter',
    role: 'CEO, StartupHub',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Working with Pixell BD was a game-changer for our business. The team is professional, creative, and always delivered beyond expectations.',
  },
  {
    id: 3,
    name: 'David Johnson',
    role: 'Tech Lead, InnovateX',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    review:
      'The frontend solutions were pixel-perfect, fast, and scalable. Highly recommended for anyone looking to elevate their digital products.',
  },
  {
    id: 4,
    name: 'Emily Parker',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'Pixell BD brought our vision to life with outstanding UI/UX design. The attention to detail and delivery speed were unmatched.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const { name, role, image, review } = testimonials[current]

  return (
    <section
      id='testimonial'
      className='bg-[#1a1d24] text-white py-16 px-6 flex flex-col items-center'
    >
      <h4 className='text-red-500 uppercase text-sm tracking-wider font-semibold mb-2'>
        Testimonials
      </h4>
      <h2 className='text-3xl md:text-4xl font-bold mb-10'>
        What Clients Say!
      </h2>

      {/* Profile Info */}
      <div className='flex flex-col items-center'>
        <img
          src={image}
          alt={name}
          className='w-20 h-20 rounded-full object-cover border-4 border-gray-800 shadow-lg'
        />
        <h3 className='text-xl font-semibold mt-4'>{name}</h3>
        <p className='text-gray-400 text-sm'>{role}</p>
        <div className='flex mt-2'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className='text-yellow-400' />
          ))}
        </div>
      </div>

      {/* Review Card */}
      <div className='relative bg-[#111418] mt-8 max-w-3xl p-8 rounded-lg shadow-lg'>
        <span className='absolute top-4 left-4 text-5xl text-gray-700 opacity-20'>
          “
        </span>
        <p className='text-gray-300 text-lg italic leading-relaxed'>{review}</p>
        <span className='absolute bottom-4 right-4 text-5xl text-gray-700 opacity-20'>
          ”
        </span>
      </div>

      {/* Navigation Arrows */}
      <div className='flex gap-3 mt-6'>
        <button
          onClick={prevTestimonial}
          className='bg-[#0f1116] p-3 rounded-md shadow-md hover:bg-gray-700 transition'
        >
          <FiArrowLeft className='text-xl' />
        </button>
        <button
          onClick={nextTestimonial}
          className='bg-[#0f1116] p-3 rounded-md shadow-md hover:bg-gray-700 transition'
        >
          <FiArrowRight className='text-xl' />
        </button>
      </div>

      {/* Dots */}
      <div className='flex gap-2 mt-6'>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-yellow-500' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}
