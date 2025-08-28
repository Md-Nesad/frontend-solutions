'use client'
import Link from 'next/link'
import Image from 'next/image'
import notFound from '@/public/notFound.png'

export default function NotFound() {
  return (
    <div className='min-h-screen bg-[#1E1E1E] flex items-center justify-center p-4'>
      <div className='bg-[#101010] rounded-xl shadow-lg p-6 md:p-10 relative max-w-xl w-full text-center'>
        {/* 404 Illustration */}
        <div className='flex justify-center mb-8'>
          <Image
            src={notFound}
            alt='not found illustration'
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Back Button */}
        <Link href='/'>
          <button
            className='inline-flex items-center justify-center bg-[#1E1E1E]
            hover:bg-[#333] transition px-6 py-3 rounded-md text-white
            font-medium shadow-md'
          >
            ↩ Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}
