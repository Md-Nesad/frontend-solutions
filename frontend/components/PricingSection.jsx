'use client'
import { Icon } from '@/public/Icon'
import { handleScroll } from '@/utility/utility'

export default function PricingSection() {
  return (
    <section className='bg-[#212428] text-white py-20 px-4 md:px-12 lg:px-42 mb-[2px]'>
      <div className='text-center mb-16'>
        <p className='text-red-500 text-sm font-semibold'>My Pricing</p>
        <h2 className='text-4xl md:text-4xl font-bold mt-2'>
          Plans That Fit You
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Starter Plan */}
        <div className='bg-[#212428] rounded-lg px-8 pb-8 pt-4 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300'>
          <h3 className='text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4'>
            Starter Plan
          </h3>

          <div className='flex items-center justify-between mb-7 mt-4'>
            <p className='text-gray-400 mb-4'>
              Perfect for Individuals
              <br />
              <span className='text-sm'>Tools: Figma</span>
            </p>
            <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
              $55
            </div>
          </div>

          <ul className='space-y-3 mb-25'>
            <li className='flex items-center gap-4'>
              <Icon /> UI/UX Design for 1 Page
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> 2 Revision
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Delivery in 2 Days
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Basic Prototype
            </li>
          </ul>

          <button
            onClick={() => handleScroll('contact')}
            className='w-full bg-[#212428] text-[#FAAF40] py-3 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)]'
          >
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className='bg-[#212428]  rounded-lg px-8 pb-8 pt-4 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300'>
          <h3 className='text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4'>
            Pro Plan
          </h3>

          <div className='flex items-center justify-between mb-7 mt-4'>
            <p className='text-gray-400 mb-4'>
              Great for Startups
              <br />
              <span className='text-sm'>Tools: Figma</span>
            </p>
            <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
              $260
            </div>
          </div>

          <ul className='space-y-3 mb-25'>
            <li className='flex items-center gap-4'>
              <Icon /> UI/UX Design for Up to 5 Pages
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> 5 Revision
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Delivery in 7 Days
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Interactive Prototype
            </li>
          </ul>

          <button
            onClick={() => handleScroll('contact')}
            className='w-full bg-[#212428] text-[#FAAF40] py-3 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)]'
          >
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className='bg-[#212428]  rounded-lg px-8 pb-8 pt-4 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300'>
          <h3 className='text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4'>
            Premium Plan
          </h3>

          <div className='flex items-center justify-between mb-7 mt-4'>
            <p className='text-gray-400 mb-4'>
              Built for Scale
              <br />
              <span className='text-sm'>Tools: Figma</span>
            </p>
            <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
              $5,000
            </div>
          </div>

          <ul className='space-y-3 mb-16.5'>
            <li className='flex items-center gap-4'>
              <Icon /> Full Website/App UI/UX
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Unlimited Revisions
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Delivery in 20 – 25 Days
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> User Flow, Prototypes
            </li>
            <li className='flex items-center gap-4'>
              <Icon /> Ongoing Support (1 Week Free)
            </li>
          </ul>

          <button
            onClick={() => handleScroll('contact')}
            className='w-full bg-[#212428] text-[#FAAF40] py-3 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)]'
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
