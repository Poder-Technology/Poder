import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const StaffHero = () => {
  return (
    <div>
        <section className="relative bg-cover bg-center mt-28 h-screen">
<div className="relative z-10 flex flex-col gap-6 items-center h-full text-center text-white px-4">
<h1 class="text-4xl md:text-5xl font-bold">
Expand Your  <span class="text-yellow-500">Fuel Station’s</span> Reach
</h1>
<p className="mt-4 text-lg text-center">Earn money by notifying buyers when you have fuel available.</p>

    <div className=" items-center justify-center flex mt-16">
            <button className="mt-4 px-4 py-2 bg-white text-indigo-900 rounded-lg font-semibold  flex items-center gap-2 hover:bg-blue-800 transition-colors duration-200">
      Join us today!
      <AiOutlineRight className="transition-transform duration-200 transform group-hover:translate-x-1" />
    </button>
    
    </div>

</div>

</section>
    </div>
  )
}

export default StaffHero