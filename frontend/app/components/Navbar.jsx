'use client'
import { useState, useEffect } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { handleScroll } from '../utility/utility'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  // section in the page
  const sections = ['home', 'services', 'portfolio', 'testimonial', 'contact']

  const handleClick = (section) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      handleScroll(section)
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = ''
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section
            break
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  return (
    <nav className='bg-[#212428] border-b border-gray-700 px-6 md:px-10 py-4 flex items-center sm:justify-around max-sm:justify-between fixed top-0 left-0 w-full z-50'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 bg-gradient-to-tr from-red-500 to-yellow-400 rotate-45 rounded-sm'></div>
        <h1 className='text-white font-semibold text-xl'>Pixell BD</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 text-gray-300'>
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`relative cursor-pointer capitalize transition ${
              active === item
                ? 'text-red-500 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {item}
            {active === item && (
              <span className='absolute left-0 -bottom-1 w-full h-[2px] bg-red-500'></span>
            )}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={() => handleClick('contact')}
        className={`hidden md:flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-black/60 px-4 py-2 rounded-md font-medium hover:scale-105 transition text-red-500
        }`}
      >
        <ShoppingCart size={16} />
        Buy Now
      </button>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-[#1E2125] border-t border-gray-700 md:hidden'>
          <ul className='flex flex-col items-center py-4 space-y-4 text-gray-300'>
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => handleClick(item)}
                className={`cursor-pointer capitalize ${
                  active === item
                    ? 'text-red-500 font-semibold'
                    : 'hover:text-white'
                }`}
              >
                {item}
              </li>
            ))}
            <button
              onClick={() => handleClick('contact')}
              className={`flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-black/60 px-4 py-2 rounded-md font-medium hover:scale-105 transition ${
                active === 'contact' ? 'text-red-500' : 'text-gray-300'
              }`}
            >
              <ShoppingCart size={16} />
              Buy Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  )
}
