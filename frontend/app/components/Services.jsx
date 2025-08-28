import uiux from '@/public/portfolioImage/uiuxDesign.png'
import webdesign from '@/public/portfolioImage/webDesign.png'
import mobileApp from '@/public/portfolioImage/mobileAppDesign.png'
import frontend from '@/public/portfolioImage/frontend.png'
import branding from '@/public/portfolioImage/brandingDesign.png'
import prototype from '@/public/portfolioImage/prototype.png'

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating user-centered interfaces that are both visually appealing and easy to navigate.',
    },
    {
      title: 'Web Design',
      desc: 'Designing responsive and modern websites that reflect your brand and engage visitors.',
    },
    {
      title: 'Mobile App Design',
      desc: 'Crafting sleek, intuitive app interfaces that offer seamless experiences on any device.',
    },
    {
      title: 'Wireframes & Prototypes',
      desc: 'Building clear blueprints and interactive prototypes to visualize ideas before development.',
    },
    {
      title: 'User Interface (Frontend)',
      desc: 'Designing clean, responsive, and intuitive interfaces for seamless user experiences.',
    },
    {
      title: 'User Research & Testing',
      desc: 'Understanding user behavior through research and testing to improve design decisions.',
    },
  ]

  return (
    <section
      id='services'
      className='bg-[#212428] text-white px-6 md:px-20 lg:px-42 py-16'
    >
      {/* Section Header */}
      <div className='text-center mb-12'>
        <p className='text-red-500 font-semibold uppercase tracking-widest'>
          My Services
        </p>
        <h2 className='text-3xl md:text-4xl font-bold'>
          UI/UX Design & Frontend Development
        </h2>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-[#1A1C20] p-6 rounded-lg shadow-md shadow-black/40 hover:scale-105 transition'
          >
            {/* Circle Icon Placeholder */}
            <div className='w-10 h-10 border-2 border-orange-400 rounded-full mb-4'></div>
            <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
