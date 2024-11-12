import React from 'react'

const CategorySec = () => {
  return (
    <div>
        
    <section className="flex items-center justify-center gap-4 py-2 bg-gray-200 rounded-full max-w-sm mx-auto my-10">
  <button className="px-6 py-2 text-white bg-blue-800 rounded-full">Buyers</button>
  <button className="px-6 py-2 text-gray-700 rounded-full hover:bg-gray-300">Station Staff</button>
  <button className="px-6 py-2 text-gray-700 rounded-full hover:bg-gray-300">Business</button>
</section>

<div className="items-center justify-center text-center mx-auto max-w-2xl px-6">
    <p>Get petrol, diesel or kerosene from any of the stations featured on our platform. 
    You can also communicate with the workers of the station, to ensure you get quality service!</p>
</div>
    </div>
  )
}

export default CategorySec