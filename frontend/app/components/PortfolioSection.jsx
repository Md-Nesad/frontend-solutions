import uiux from '@/public/portfolioImage/uiuxDesign.png'
import webdesign from '@/public/portfolioImage/webDesign.png'
import mobileApp from '@/public/portfolioImage/mobileAppDesign.png'
import frontend from '@/public/portfolioImage/frontend.png'
import branding from '@/public/portfolioImage/brandingDesign.png'
import prototype from '@/public/portfolioImage/prototype.png'
import Image from 'next/image'

const portfolioItems = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences.',
    image: uiux,
  },
  {
    title: 'Web Design',
    description: 'Designing responsive websites.',
    image: webdesign,
    arrow: true,
  },
  {
    title: 'Mobile App Design',
    description: 'Creating seamless and engaging app interfaces.',
    image: mobileApp,
  },
  {
    title: 'Frontend Development',
    description: 'Interactive and user-friendly web interfaces.',
    image: frontend,
  },
  {
    title: 'Branding Design',
    description: 'Developing strong and cohesive brand identities.',
    image: branding,
  },
  {
    title: 'Interactive Prototypes',
    description: 'Clickable interactive designs.',
    image: prototype,
  },
]

export default function PortfolioSection() {
  return (
    <section
      id='portfolio'
      className='bg-[#1E1E1E] text-white py-20 px-6 md:px-16 lg:px-42'
    >
      {/* Heading */}
      <div className='text-center mb-16'>
        <p className='text-red-500 font-semibold text-sm uppercase'>
          My Portfolio
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mt-2'>
          Design & Development Highlights
        </h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {portfolioItems.map(
          (item, index) => (
            console.log(item),
            (
              <div
                key={index}
                className='bg-[#2A2A2A] rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className='w-full h-48 object-cover'
                />
                <div className='p-5'>
                  <h3 className='text-red-500 font-medium mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-md text-gray-300 flex items-center gap-2'>
                    {item.description}
                    {item.arrow && (
                      <span className='text-red-500 text-xl'>→</span>
                    )}
                  </p>
                </div>
              </div>
            )
          )
        )}
      </div>
    </section>
  )
}
