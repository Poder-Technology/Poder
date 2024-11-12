import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SaffRewardSec = () => {
  return (
    <div>
            <section className="py-8 lg:px-10 lg:mx-6">
    <div className="flex justify-between p-3 px-14">
    <h2 className="text-2xl font-bold text-center">A Platform That Rewards</h2>

     {/* <a href="">View all</a> */}
    </div>
      
      
      <div className="flex flex-col justify-center items-center  w-full lg:gap-14 lg:flex-row">

      
        {/* Station Card */} 
        <div className="flex flex-col md:w-1/2 gap-6  lg:mt-6 p-5 overflow-hidden ">
    
          <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/staff/Frame 1984077666 (1).png`} alt="Station" className="lg:max-w-custom5 h-70 object-cover" /></div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Refer and Rack Up Tokens!</h3>
            <div className="flex items-center gap-1">
            
            <p className="text-gray-600">Invite new users to the platform and earn tokens with every referral. Watch your tokens grow and convert them to cash each month!</p>
            </div>

            <div className="flex items-center mt-4 text-center text-indigo-900 relative">
           <a href="" className=" font-medium">Learn More</a>
           <AiOutlineArrowRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>
           
           
          </div>
        </div>
    

     
        {/* Station Card */}
    
         <div className="flex flex-col md:w-1/2 gap-6  lg:mt-6 p-5 overflow-hidden ">
    
    <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/staff/Frame 1984077667 (1).png`} alt="Station" className="lg:max-w-custom5 h-70 object-cover" /></div>
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold">Refer and Rack Up Tokens!</h3>
      <div className="flex items-center gap-1">
      
      <p className="text-gray-600">Invite new users to the platform and earn tokens with every referral. Watch your tokens grow and convert them to cash each month!</p>
      </div>

      <div className="flex items-center mt-4 text-center text-indigo-900 relative">
     <a href="" className=" font-medium">Learn More</a>
     <AiOutlineArrowRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
     </div>
     
     
    </div>
  </div>

      
            </div>
      
    </section>
    </div>
  )
}

export default SaffRewardSec