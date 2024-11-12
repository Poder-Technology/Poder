import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import NavBar from "../components/NavBar";
import StaffHero from "../components/StaffHero";
import CategorySec from "../components/CategorySec";
import OurNumbers from "../components/OurNumbers";
import SaffRewardSec from "../components/SaffRewardSec";
import AmazingFeatures from "../components/AmazingFeatures";
import FlexCard from "../components/FlexCard";
import FlexCard2 from "../components/FlexCard2";
import WhoServe from '../components/WhoServe';
import TestemonialSec from '../components/TestemonialSec';
import FAQSec from '../components/FAQSec';
import ContactSec from '../components/ContactSec';
import Footer from '../components/Footer';

const StaffPage = () => {


  return (
    <div>
    <div  className="h-screen bg-cover bg-center p-6 px-10" 
style={{
  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b528/a209/478d12c14d7f910d9ca87912c8a60964?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl0qNG6T2IGb-fnFYE6NkR417uhHeLxMYnu4JzNxr-phXVs9SGaGqsJ75ou~mgfSE4rXv4hjVLIySCs1COWTBG5x8D3hNoOVNXxdw4UJdwbMO7a6~vUNEY5cKi6qE2oc7zUFEj1K3ZmoeSGkOKtt8zncTfzXGB1chijSfGLNfktySMCVibkShlj~-nXevRCv4s-XbmzSz3P0xZM7hLz3ZcSCUo0RWw6Dli5GDvShzPSdSn2S0Ar7ZpVW6JDvDLAkEznVLeSZUlsHFaTIX-4iyQq9XR3c8mSYGNg4ZaIZQiT78l8rx0sivllugC8oiaRnia3SP-SD6lCjleXx3nEFUg__')`,
}}>

 {/* Dark Overlay */}
 <div className="absolute inset-0 bg-black opacity-60"></div>

{/* Navbar */}

  <NavBar/>

{/* hero section */}

<StaffHero/>


</div>

{/* category Tabs */}

<CategorySec/>

  {/* our numbers */}
<OurNumbers/>
        
        {/* A Platform That Rewards Section */}

  <SaffRewardSec/>

      {/* Amazing Features */}
      <section className=" py-2 lg:py-8 lg:px-10 lg:mx-6">
    <h2 className=" text-3xl font-semibold p-4 my-4">Explore our amazing Features</h2>
      <AmazingFeatures
        image1={`${process.env.PUBLIC_URL}/staff/image 791.png`}
        title1="Seamless Registration"
        description1="Register your station in a very fast and easy way that takes less than 2 minutes of your time, and start raking in more views and more profits."
        image2={`${process.env.PUBLIC_URL}/staff/image 792.png`}
        title2="Performance Token"
        description2="Get rewarded with monthly tokens that can be converted into real cash and withdrawn into your bank account."
      />

      <AmazingFeatures
        image1={`${process.env.PUBLIC_URL}/img/image 793.png`}
        title1="Payment Integration"
        description1="Enjoy simple, cost-effective payments for seamless access to premium fuel management services on the platform."
        image2={`${process.env.PUBLIC_URL}/img/Discovery Icon Container (2).png`}
        title2="Fuel Fraud Prevention"
        description2="Ensure fair transactions and trust with our secure system, where buyers and sellers get exactly what they pay for—no surprises, just transparency."
      />
      </section>


  {/* why choose us? */}
  <section className=" flex flex-col gap-2 lg:gap-6 items-center text-center justify-center mt-10 mb-10 ">
        <h2 className=" text-3xl font-medium mb-4">Why choose Us?</h2>

        <span className=" text-lg font-semibold">Real-time Reporting</span>
        <p className=" text-base  font-normal px-2 lg:px-60 ">
        Get real-time insights into station and individual performance—monitor station productivity and track your personal achievements as a valued team member
        </p>

        <div className=" items-center justify-center flex">
            <button className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors duration-200">
      Learn More
      <AiOutlineRight className=" ml-2 transition-transform duration-200 transform group-hover:translate-x-1" />
    </button>
    
            </div>
  </section>

{/* dashboard section */}
  <section>
  <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/staff/dashboard.png`} alt="Station" className=" object-cover" /></div>
  </section>

  {/* Amazing Features */}

    <FlexCard
      images={`${process.env.PUBLIC_URL}/staff/Frame 1984077711.png`}
      altText="stations"
      title="Your Station’s Digital Platform"
      description="Streamline and digitize your fuel station operations with an all-in-one platform—designed to boost visibility, manage inventory, and track performance, giving you and your team the tools to operate efficiently and serve customers better."
    />
 {/* Amazing Features */}

<FlexCard2
  image={`${process.env.PUBLIC_URL}/staff/Frame 1984077714.png`}
  altText="stations"
  title="Refer And Earn"
  description="Share the benefits of our platform with others and earn rewards. Each referral you make helps expand our network, while also bringing in even more value to you and your station."

/>

{/* Who we serve */}
<WhoServe/>

{/* Testemonial section */}
<TestemonialSec/>

{/* FAQ section */}
<FAQSec/>

{/* contact section */}
<ContactSec/>

{/* footer */}
<Footer/>


    </div>
  )
}

export default StaffPage