import contact from '@/public/contact.png'
import Image from 'next/image'
export default function ContactSection() {
  return (
    <section
      id='contact'
      className='bg-[#1E1E1E] text-white py-20 px-6 md:px-16 lg:px-42'
    >
      <div className='text-center mb-16'>
        <p className='text-red-500 text-sm font-semibold'>Contact Me</p>
        <h2 className='text-4xl md:text-5xl font-bold mt-2'>
          Let’s Build Something Great
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Contact Form */}
        <form className='lg:col-span-2 bg-[#2A2A2A] p-8 rounded-lg shadow-md space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm mb-2'>YOUR NAME</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-sm mb-2'>PHONE NUMBER</label>
              <input
                placeholder='Enter your phone number'
                type='text'
                className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-sm mb-2'>EMAIL</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-sm mb-2'>Package</label>
              <select className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'>
                <option>Select Package</option>
                <option>Starter Plan</option>
                <option>Pro Plan</option>
                <option>Premium Plan</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block text-sm mb-2'>SUBJECT</label>
            <input
              type='text'
              placeholder='Enter subject'
              className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'
            />
          </div>

          <div>
            <label className='block text-sm mb-2'>MESSAGE</label>
            <textarea
              rows='3'
              placeholder='Enter your message'
              className='w-full bg-[#1E1E1E] p-3 rounded border-none focus:outline-none'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-[#333] py-3 rounded-md text-white font-semibold hover:bg-[#444] transition'
          >
            Send Message
          </button>
        </form>

        {/* Profile Card */}
        <div className='bg-[#2A2A2A] p-6 rounded-lg shadow-md text-sm'>
          <Image src={contact} alt='Card' className='rounded-md mb-6' />
          <h3 className='text-lg font-semibold mb-1'>Micel Brown</h3>
          <p className='text-gray-400 mb-4'>
            SR UI/UX Designer | Frontend Developer
          </p>
          <p className='text-gray-400 mb-4'>
            I'm available for freelance work. Feel free to connect with me
            through messaging.
          </p>
          <p className='text-gray-300 mb-2'>Phone: +8801000 000 000</p>
          <p className='text-gray-300 mb-6'>Email: info@pixellbd.com</p>

          <p className='text-gray-400 mb-2'>FIND WITH ME</p>
          <div className='flex space-x-4 mt-2'>
            <a
              href='#'
              className='bg-green-500 w-8 h-8 rounded flex items-center justify-center'
            >
              Up
            </a>
            <a
              href='#'
              className='bg-blue-500 w-8 h-8 rounded flex items-center justify-center'
            >
              f
            </a>
            <a
              href='#'
              className='bg-[#1877f2] w-8 h-8 rounded flex items-center justify-center'
            >
              Fb
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
