import React from 'react'

const OurNumbers = () => {
  return (
    <div>
          <section class="text-center py-8">
        <h2 className="text-3xl font-semibold my-5">Our Numbers So Far</h2>
        <h3 className=" font-medium text-2xl text-customBlue mb-6 py-3">Get Petrol</h3>
        <div class="flex justify-around gap-8 mt-5 px-4">
        {/* 1st */}
        <div className="flex justify-center items-center" >
        
        <div className="z-10 max-w-20 "><img src={`${process.env.PUBLIC_URL}/img/fluent-emoji-high-contrast_fuel-pump.png`} alt="fluent emoji" className="  w-10 lg:w-auto" /></div>
            
        <div className="flex flex-col text-center justify-center items-center">
            <div className="lg:text-4xl text-1xl font-bold text-gray-800">100+</div>
            <p className="text-gray-700 lg:font-semibold">Stations</p>
            </div>

        </div>
            {/* 2nd */}

        <div className="flex justify-center items-center" >
        
        <div className="z-10 max-w-20 "><img src={`${process.env.PUBLIC_URL}/img/image 799.png`} alt="fluent emoji" className="  w-10 lg:w-auto"/></div>
            
        <div className="flex flex-col text-center justify-center items-center">
            <div className="lg:text-4xl text-1xl font-bold text-gray-800">200+</div>
            <p className="text-gray-700 lg:font-semibold">Workers</p>
            </div>

        </div>  
        {/* Third */}
        <div className="flex justify-center items-center" >
        
        <div className="z-10 max-w-20 "><img src={`${process.env.PUBLIC_URL}/img/image 798.png`} alt="fluent emoji" className="  w-10 lg:w-auto" /></div>
            
        <div className="flex flex-col text-center justify-center items-center">
            <div className="lg:text-4xl text-1xl font-bold text-gray-800">200+</div>
            <p className="text-gray-700 lg:font-semibold">Attendants</p>
            </div>

        </div>

        </div>
        </section>
    </div>
  )
}

export default OurNumbers