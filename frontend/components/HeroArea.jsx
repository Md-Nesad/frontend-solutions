'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import profileImg from '@/public/HeroImage/heroImage.png'
import figma from '@/public/HeroImage/figma.png'
import xd from '@/public/HeroImage/xd.png'
import photoshop from '@/public/HeroImage/photoshop.png'
import react from '@/public/HeroImage/react.png'
import next from '@/public/HeroImage/next.png'
import fiverr from '@/public/HeroImage/fiverr.png'
import upwork from '@/public/HeroImage/upwork.png'
import facebook from '@/public/HeroImage/facebook.png'
import { handleScroll } from '../utility/utility'

export default function HeroArea() {
  return (
    <section
      id='home'
      className='bg-[#212428] text-white px-6 md:px-16 lg:px-42 py-20 flex flex-col md:flex-row items-center justify-between mt-15'
    >
      {/* Left Side */}
      <div className='max-w-xl space-y-5'>
        <p className='uppercase tracking-widest text-sm text-gray-400'>
          Welcome to <span className='text-white font-medium'>Pixell BD</span>
        </p>

        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Hi, I’m <span className='text-orange-400'>Micel Brown</span> <br />a{' '}
          <span className='text-white'>UI/UX Designer.</span>
        </h1>

        <p className='text-gray-300 leading-relaxed'>
          I design intuitive, visually engaging digital experiences and build
          frontend solutions that connect users with brands.
        </p>

        {/* Contact Button */}
        <button
          onClick={() => handleScroll('contact')}
          className='flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-black/50 px-6 py-3 rounded-md text-red-500 font-semibold hover:scale-105 transition'
        >
          Contact me <ArrowRight size={18} />
        </button>

        {/* Skills & Socials */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-10'>
          {/* Skills */}
          <div>
            <p className='text-xs tracking-widest text-gray-400 mb-3'>
              BEST SKILL ON
            </p>
            <div className='flex gap-3'>
              <div className='bg-[#1A1C20] p-3 rounded-lg'>
                <Image src={figma} alt='figma' />
              </div>

              <div className='bg-[#1A1C20] p-3 rounded-lg'>
                <Image src={xd} alt='xd' />
              </div>
              <div className='bg-[#1A1C20] p-3 rounded-lg'>
                <Image src={photoshop} alt='photoshop' width={28} height={28} />
              </div>
              <div className='bg-[#1A1C20] p-3 rounded-lg'>
                <Image src={react} alt='react' width={28} height={28} />
              </div>
              <div className='bg-[#1A1C20] p-3 rounded-lg'>
                <Image src={next} alt='nextjs' width={28} height={28} />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className='text-xs tracking-widest text-gray-400 mb-2'>
              FIND WITH ME
            </p>
            <div className='flex gap-3'>
              <a href='#' className='w-18 h-18'>
                <Image src={upwork} alt='Upwork' />
              </a>
              <a href='#' className='w-18 h-18'>
                <Image src={fiverr} alt='Fiverr' />
              </a>
              <a href='#' className='w-18 h-18'>
                <Image src={facebook} alt='Facebook' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className='mt-10 md:mt-0'>
        <div className='relative w-[300px] md:w-[400px]'>
          <Image
            src={profileImg}
            alt='Micel Brown'
            className='rounded-lg shadow-lg'
            priority
          />
        </div>
      </div>
    </section>
  )
}
