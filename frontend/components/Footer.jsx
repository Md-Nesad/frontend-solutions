'use client'

import { handleScroll } from '../utility/utility'

export default function Footer() {
  return (
    <footer className='bg-[#1E1E1E] text-white pt-16 pb-6 px-6 md:px-16 lg:px-42'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10'>
        {/* Left - Logo and Description */}
        <div className='md:col-span-2 w-100'>
          <div className='flex items-center mb-4'>
            <div className='w-6 h-6 bg-orange-500 rounded-sm mr-2'></div>
            <h2 className='text-xl font-semibold'>Pixell BD</h2>
          </div>
          <p className='text-sm text-gray-400 leading-relaxed'>
            Pixell BD is a UI/UX design and frontend development studio. We
            specialize in crafting simple, beautiful, and user-friendly digital
            experiences that not only look great but also engage users
            effectively. Our goal is to help brands build meaningful connections
            with their audience by delivering intuitive, functional, and
            responsive designs across all devices.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className='text-red-500 text-lg font-semibold mb-4'>
            Quick Link
          </h3>
          <ul className='space-y-2'>
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='hover:text-red-500'
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('services')}
                className='hover:text-red-500'
              >
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('portfolio')}
                className='hover:text-red-500'
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('contact')}
                className='hover:text-red-500'
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className='lg:ml-15'>
          <h3 className='text-red-500 text-lg font-semibold mb-4'>
            Contact Me
          </h3>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li>
              📧 <span className='font-medium'>Email:</span> <br />
              info@pixellbd.com
            </li>
            <li>
              📞 <span className='font-medium'>Phone:</span> <br />
              +8801000 000 000
            </li>
            <li>
              🌐 <span className='font-medium'>Location:</span> <br />
              Uttora, Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='text-center text-gray-500 text-sm pt-6'>
        © {new Date().getFullYear()} Pixell BD. All rights reserved.
      </div>
    </footer>
  )
}
