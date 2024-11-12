import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const AmazingFeatures = ({image1,title1, description1, image2, title2,description2 }) => {


  return (
    <div>
    
    <div className=" py-8 lg:flex lg:flex-row flex flex-col gap-5 px-4 w-full">

        <div className="flex lg:w-1/2 gap-3">
        <div className="z-10 "><img src={image1} alt="" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5 pr-20">
            <h3 className=" text-l font-medium">{title1}</h3>
            <p>{description1}</p>
           <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>
            </div>
        </div>

        <div className="flex lg:w-1/2 gap-3">
        <div className="z-10 "><img src={image2} alt="" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5 pr-20">
            <h3 className=" text-l font-medium">{title2}</h3>
            <p>{description2}</p>
            <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default AmazingFeatures