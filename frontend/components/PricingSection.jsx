export default function PricingSection() {
  return (
    <section className='bg-[#1E1E1E] text-white py-20 px-4 md:px-12 lg:px-42'>
      <div className='text-center mb-16'>
        <p className='text-red-500 text-sm font-semibold'>My Pricing</p>
        <h2 className='text-4xl md:text-5xl font-bold mt-2'>
          Plans That Fit You
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Starter Plan */}
        <div className='bg-[#2A2A2A] rounded-lg p-8 shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>Starter Plan</h3>
          <p className='text-gray-400 mb-4'>
            Perfect for Individuals
            <br />
            <span className='text-sm'>Tools: Figma</span>
          </p>
          <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
            $55
          </div>

          <ul className='space-y-3 mb-6'>
            <li>✅ UI/UX Design for 1 Page</li>
            <li>✅ 2 Revision</li>
            <li>✅ Delivery in 2 Days</li>
            <li>✅ Basic Prototype</li>
          </ul>

          <button className='w-full bg-[#ffae00] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition'>
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className='bg-[#2A2A2A] rounded-lg p-8 shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>Pro Plan</h3>
          <p className='text-gray-400 mb-4'>
            Great for Startups
            <br />
            <span className='text-sm'>Tools: Figma</span>
          </p>
          <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
            $260
          </div>

          <ul className='space-y-3 mb-6'>
            <li>✅ UI/UX Design for Up to 5 Pages</li>
            <li>✅ 5 Revision</li>
            <li>✅ Delivery in 7 Days</li>
            <li>✅ Interactive Prototype</li>
          </ul>

          <button className='w-full bg-[#ffae00] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition'>
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className='bg-[#2A2A2A] rounded-lg p-8 shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>Premium Plan</h3>
          <p className='text-gray-400 mb-4'>
            Built for Scale
            <br />
            <span className='text-sm'>Tools: Figma</span>
          </p>
          <div className='text-right text-yellow-400 text-xl font-bold mb-6'>
            $5,000
          </div>

          <ul className='space-y-3 mb-6'>
            <li>✅ Full Website/App UI/UX</li>
            <li>✅ Unlimited Revisions</li>
            <li>✅ Delivery in 20 – 25 Days</li>
            <li>✅ User Flow, Prototypes</li>
            <li>✅ Ongoing Support (1 Week Free)</li>
          </ul>

          <button className='w-full bg-[#ffae00] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
