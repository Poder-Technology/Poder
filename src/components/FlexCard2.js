import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const FlexCard2 = ({image,altText, title, description}) => {

  return (
    <div>
          <section className="py-2 p-2 lg:py-8 lg:px-10 lg:mx-6">
    <div className="flex flex-col lg:flex-row-reverse w-full bg-EEEFFF">
    <div className="z-10 lg:w-1/2 justify-items-end"><img src={image} alt={altText} className=" object-cover" /></div>
    
    <div className="lg:w-1/2 p-4 flex flex-col justify-center gap-5 lg:px-6">
        <h3 className=" text-3xl font-bold">{title}</h3>
        <p className=" text-lg font-semibold">{description}</p>
    
        <div className="flex items-center mt-4 text-center text-indigo-900 relative">
     <a href="" className=" font-medium">Learn More</a>
     <AiOutlineArrowRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
     </div>

    </div>
    </div>
  </section>
    </div>
  )
}

export default FlexCard2