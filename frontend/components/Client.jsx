'use client'
import Image from 'next/image'
import bravery from '@/public/clientPicture/bravery.png'
import edges from '@/public/clientPicture/edges.png'
import sesame from '@/public/clientPicture/sesame.png'
import earrins from '@/public/clientPicture/earrins.png'
import ledger from '@/public/clientPicture/ledger.png'
import california from '@/public/clientPicture/califarnia.png'
import teplo from '@/public/clientPicture/teplo.png'
import harry from '@/public/clientPicture/harry.png'

const clients = [
  {
    id: 1,
    logo: bravery,
    name: 'Alexander Carter',
    role: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 2,
    logo: edges,
    name: 'Sophia Martinez',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
  },
  {
    id: 3,
    logo: sesame,
    name: 'Benjamin Thomps',
    role: 'Ceo & Funder',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 4,
    logo: earrins,
    name: 'Nathan Roberts',
    role: 'Creative Director',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    id: 5,
    logo: ledger,
    name: 'Samuel Lewis',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 6,
    logo: california,
    name: 'Olivia Scott',
    role: 'Product Designer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 7,
    logo: teplo,
    name: 'Daniel Harris',
    role: 'Ceo & Funder',
    avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
  },
  {
    id: 8,
    logo: harry,
    name: 'Isabella Clark',
    role: 'UX Lead',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
]

export default function Clients() {
  return (
    <section className='bg-[#1a1d24] text-white py-16 px-6  md:px-16 lg:px-42'>
      {/* Section Header */}
      <h4 className='text-red-500 uppercase text-sm tracking-wider font-semibold mb-2'>
        Popular Client
      </h4>
      <h2 className='text-3xl md:text-4xl font-bold mb-10'>
        My Amazing Clients
      </h2>

      {/* Clients Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {clients.map((client) => (
          <div
            key={client.id}
            className='bg-[#111418] rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col items-center'
          >
            {/* Logo */}
            <div className='bg-gray-100 w-full h-32 flex items-center justify-center rounded-md overflow-hidden'>
              <Image
                src={client.logo}
                alt={client.name}
                className='object-contain'
              />
            </div>

            {/* Person Info */}
            <div className='flex items-center gap-3 mt-4 w-full'>
              <img
                src={client.avatar}
                alt={client.name}
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <h3 className='text-sm font-semibold'>{client.name}</h3>
                <p className='text-xs text-gray-400'>{client.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
