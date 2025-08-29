import { services } from '@/data/data'

export default function Services() {
  return (
    <section
      id='services'
      className='bg-[#212428] text-white px-6 md:px-20 lg:px-42 pt-16 pb-20 mt-2'
    >
      {/* Section Header */}
      <div className='text-center mb-12 mt-7'>
        <p className='text-[#EE4036] font-semibold uppercase tracking-widest'>
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
            className='bg-[#212428] px-9 py-6 rounded-lg hover:bg-[#191C1F] shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300'
          >
            {/* Circle Icon Placeholder */}
            <div className='w-12 h-12 border-5 border-[#FAAF40] rounded-full mb-4'></div>
            <h3 className='text-xl font-bold mb-4 mt-6'>{service.title}</h3>
            <p className='text-[#F5EDFF] text-md leading-relaxed'>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
