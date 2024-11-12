import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

const cardData = [
  {
    image: '/img/fluent-emoji-high-contrast_fuel-pump (1).png', 
    title: 'Station Staff',
    description: 'Supervisors and attendants can register their fuel stations to get more visibility',
  },
  {
    image: '/img/image 796.png', 
    title: 'Businesses',
    description: 'We connect you with the best, most accessible fuel stations to ensure your business’s growth,',
  },
  {
    image: '/img/fluent-emoji-high-contrast_fuel-pump (2).png',
    title: 'Individuals',
    description: 'Direct communication prompt responses between you and various fuel stations around you.',
  },
];


const WhoServe = () => {

  return (

    <div>

  <section className="py-8 text-center bg-white lg:px-10">
      <h2 className="text-2xl font-semibold text-left px-10 lg:text-center lg:px-0">Who We Serve</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8 mt-6 px-8">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg ">
            <img src={card.image} alt={card.title} className="mx-auto w-120px h-120px mb-4" />
            <h3 className="font-semibold mt-2 text-3xl">{card.title}</h3>
            <p className="text-gray-600 text-lg">{card.description}</p>
            <div className=" items-center justify-center flex">
            <button className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded flex items-center gap-2 hover:bg-blue-800 transition-colors duration-200">
      Learn More
      <AiOutlineRight className="transition-transform duration-200 transform group-hover:translate-x-1" />
    </button>
    
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
  )
}

export default WhoServe