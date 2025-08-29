'use client'
import contact from '@/public/contact.png'
import Image from 'next/image'
import fiverr from '@/public/HeroImage/fiverr.png'
import upwork from '@/public/HeroImage/upwork.png'
import facebook from '@/public/HeroImage/facebook.png'
import { FiChevronDown } from 'react-icons/fi'
export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section
      id='contact'
      className='bg-[#212428] text-white py-20 px-6 md:px-16 lg:px-42'
    >
      <div className='text-center mb-16'>
        <p className='text-red-500 text-sm font-semibold'>Contact Me</p>
        <h2 className='text-4xl md:text-4xl text-[#F5EDFF] font-bold mt-2'>
          Let’s Build Something Great
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Contact Form */}
        <form className='lg:col-span-2 bg-[#212428] p-8 rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.3)] space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
                YOUR NAME
              </label>
              <input
                type='text'
                className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'
              />
            </div>
            <div>
              <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
                PHONE NUMBER
              </label>
              <input
                type='text'
                className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'
              />
            </div>
            <div>
              <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
                EMAIL
              </label>
              <input
                type='email'
                className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'
              />
            </div>
            <div>
              <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
                Package
              </label>
              <div className='relative'>
                <select className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] appearance-none curosr-pointer'>
                  <option>Select Package</option>
                  <option>Starter Plan</option>
                  <option>Pro Plan</option>
                  <option>Premium Plan</option>
                </select>
                <FiChevronDown className='absolute top-4 right-3 text-[#F5EDFFCC]' />
              </div>
            </div>
          </div>

          <div>
            <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
              SUBJECT
            </label>
            <input
              type='text'
              className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'
            />
          </div>

          <div>
            <label className='block text-sm mb-2 text-[#F5EDFFCC]'>
              MESSAGE
            </label>
            <textarea
              rows='3'
              className='w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'
            ></textarea>
          </div>

          <button
            type='submit'
            onClick={(e) => handleSubmit(e)}
            className='w-full bg-[#212428] py-3 rounded-sm shadow-[0_0_5px_rgba(255,255,255,0.3)] text-[#F5EDFFCC] font-semibold hover:bg-[#17191c] transition'
          >
            Send Message
          </button>
        </form>

        {/* Profile Card */}
        <div className='bg-[#212428] p-6 rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.3)] text-sm'>
          <Image
            src={contact}
            alt='Card'
            className='rounded-md mb-6 hover:scale-103 transition duration-300'
          />
          <h3 className='text-lg font-semibold mb-1 text-[#F5EDFFCC]'>
            Micel Brown
          </h3>
          <p className='text-gray-400 mb-4'>
            SR UI/UX Designer | Frontend Developer
          </p>
          <p className='text-gray-400 mb-4'>
            I'm available for freelance work. Feel free to connect with me
            through messaging.
          </p>
          <p className='text-gray-400 mb-2'>Phone: +8801000 000 000</p>
          <p className='text-gray-400 mb-6'>Email: info@pixellbd.com</p>

          <p className='text-gray-400 mb-2'>FIND WITH ME</p>
          <div className='flex space-x-6 mt-2'>
            <a
              href='https://www.upwork.com'
              target='_blank'
              className='bg-green-500 w-10 h-10 rounded flex items-center justify-center hover:scale-110 hover:shadow-md hover:shadow-[#63636352] transition duration-300'
            >
              <Image src={upwork} alt='upwork' />
            </a>
            <a
              href='https://www.fiverr.com'
              target='_blank'
              className='bg-green-500 w-10 h-10 rounded flex items-center justify-center hover:scale-110 hover:shadow-md hover:shadow-[#63636352] transition duration-300'
            >
              <Image src={fiverr} alt='fiverr' />
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              className='bg-[#1877f2] w-10 h-10 rounded flex items-center justify-center hover:scale-110 hover:shadow-md hover:shadow-[#63636352] transition duration-300'
            >
              <Image src={facebook} alt='facebook' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
