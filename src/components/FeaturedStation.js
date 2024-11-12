import React from 'react'
import { GoVerified } from "react-icons/go"; 
import { ImLocation } from "react-icons/im"; 

const FeaturedStation = () => {

  return (

    <div>
        

         <section className="py-8 lg:px-10 lg:mx-6">
    <div className="flex justify-between p-3 px-14">
    <h2 className="text-2xl font-semibold text-center">Featured Stations</h2>

     <a href="">View all</a>
    </div>
      
      
      <div className="flex flex-col justify-center items-center lg:gap-14 lg:flex-row">

      
        {/* Station Card */} 
        <div className="flex flex-col  gap-6  lg:mt-6 p-5 overflow-hidden ">
    
          <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/Frame 1984077666.png`} alt="Station" className="lg:max-w-custom5 h-70 object-cover" /></div>
          <div className="p-4 flex flex-col gap-3">
            <h3 className="text-lg font-semibold">HillTop Fuel Station</h3>
            <div className="flex items-center gap-1">
            <ImLocation
              className="text-yellow-500"
            />
            <p className="text-gray-600">Plot C Omo Ola Close, Ogudu G.R.A., Lagos State.</p>
            </div>
            <div className="flex gap-2 mt-2">

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className="text-green-500 font-medium"> Petrol</span>
            </div>

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className=" font-medium">Kerosene</span>
            </div>

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className="text-gray-500 font-medium">Diesel</span>
            </div>
              
              
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <span>★★★★★ (16)</span>
              <span className=" ml-20">12 mins</span>
            </div>
          </div>
        </div>
    

     
        {/* Station Card */}
        <div className="flex flex-col  gap-6 mt-6 p-5 overflow-hidden">
        <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/Frame 1984077667.png`} alt="Station" className="lg:max-w-custom5 h-70 object-cover" /></div>
        <div className="p-4 flex flex-col gap-3">
            <h3 className="text-lg font-semibold">HillTop Fuel Station</h3>
            <div className="flex items-center gap-1">
            <ImLocation
              className="text-yellow-500"
            />
            <p className="text-gray-600">Plot C Omo Ola Close, Ogudu G.R.A., Lagos State.</p>
            </div>
            <div className="flex gap-2 mt-2">

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className="text-green-500 font-medium"> Petrol</span>
            </div>

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className=" font-medium">Kerosene</span>
            </div>

            <div className="flex items-center gap-2">
            <GoVerified />
            <span className="text-gray-500 font-medium">Diesel</span>
            </div>
              
              
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <span>★★★★★ (16)</span>
              <span className=" ml-20">12 mins</span>
            </div>
          </div>
        </div>
      
            </div>
      
    </section>
    </div>
  )
}

export default FeaturedStation