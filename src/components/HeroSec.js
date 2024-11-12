import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const HeroSec = () => {
  return (
    <div>
        {/* hero section */}

<section className="relative bg-cover bg-center h-screen">
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-5xl font-bold">
      Find <span class="text-yellow-500">Fuel</span> Near You in Seconds!
    </h1>
    <p className="mt-4 text-lg text-center">Search now and see everything you need to know about the nearest fuel stations without the usual hassle, traffic and endless queue</p>
    <div className="mt-6 relative w-full max-w-5xl">
      <input
        type="text"
        placeholder="Enter a location"
        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  </div>

</section>
    </div>
  )
}

export default HeroSec