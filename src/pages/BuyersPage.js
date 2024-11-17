import React, { useState } from 'react'
import NavBar from "../Layout/NavBar";
import HeroSec from "../reusable/HeroSec";
import OurNumbers from "../reusable/OurNumbers";
import FeaturedStation from "../reusable/FeaturedStation";
import AmazingFeatures from "../reusable/AmazingFeatures";
import WhoServe from "../reusable/WhoServe";
import TestemonialSec from "../reusable/TestemonialSec";
import FAQSec from "../reusable/FAQSec";
import ContactSec from "../reusable/ContactSec";
import Footer from "../Layout/Footer";
import CategorySec from "../reusable/CategorySec";


const BuyersPage = () => {

    

  return (
    
    <div className=' font-unbounded'>
        <div  className="h-screen bg-cover bg-center p-6 px-10" 
    style={{
      backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b528/a209/478d12c14d7f910d9ca87912c8a60964?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl0qNG6T2IGb-fnFYE6NkR417uhHeLxMYnu4JzNxr-phXVs9SGaGqsJ75ou~mgfSE4rXv4hjVLIySCs1COWTBG5x8D3hNoOVNXxdw4UJdwbMO7a6~vUNEY5cKi6qE2oc7zUFEj1K3ZmoeSGkOKtt8zncTfzXGB1chijSfGLNfktySMCVibkShlj~-nXevRCv4s-XbmzSz3P0xZM7hLz3ZcSCUo0RWw6Dli5GDvShzPSdSn2S0Ar7ZpVW6JDvDLAkEznVLeSZUlsHFaTIX-4iyQq9XR3c8mSYGNg4ZaIZQiT78l8rx0sivllugC8oiaRnia3SP-SD6lCjleXx3nEFUg__')`,
    }}>

     {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black opacity-60"></div>

    <NavBar/>
    
    <HeroSec
    whitetxt="Find"
    yellowtxt="Fuel"
    whitetxt2="Near You in Seconds!"
    description="Search now and see everything you need to know about the nearest fuel stations without the usual hassle, traffic and endless queue"
    />

    </div>

    {/* category Tabs */}
    <CategorySec/>

    {/* our numbers */}
      <OurNumbers/>

 {/* Featured Stations Section */}
       <FeaturedStation/>

  {/* Amazing Features */}

  <section className=" py-2 lg:py-8 lg:px-10 lg:mx-6">
    <h2 className=" text-3xl font-semibold p-4 my-4">Explore our amazing Features</h2>
      <AmazingFeatures
        image1={`${process.env.PUBLIC_URL}/img/Discovery Icon Container.png`}
        title1="Station discovery system"
        description1="Quickly find nearby fuel stations tailored to your needs, with real-time availability and service details for a seamless fueling experience."
        image2={`${process.env.PUBLIC_URL}/img/Discovery Icon Container (1).png`}
        title2="Fleet Management Services"
        description2="Register your drivers and streamline fuel access—connect directly with stations for quick, hassle-free refueling to keep your fleet on the move."
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

     {/* who we serve section */}
     <WhoServe/>

    {/* Testemonial Section */}
    <TestemonialSec/>

   


    {/* FAQ SECTION */}
    
    <FAQSec/>

        {/* contact form */}
    <ContactSec/>

{/* footer section */}
    <Footer/>
    </div>


  )
}

export default BuyersPage