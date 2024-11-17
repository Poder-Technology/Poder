import React from 'react'
import NavBar from '../Layout/NavBar'
import HeroSec from '../reusable/HeroSec'
import OurNumbers from '../reusable/OurNumbers'
import CategorySec from '../reusable/CategorySec'
import AmazingFeatures from '../reusable/AmazingFeatures'
import FeaturedStation from '../reusable/FeaturedStation'
import FlexCard from '../reusable/FlexCard'
import FlexCard2 from '../reusable/FlexCard2'
import WhoServe from '../reusable/WhoServe'
import TestemonialSec from '../reusable/TestemonialSec'
import FAQSec from '../reusable/FAQSec'
import ContactSec from '../reusable/ContactSec'
import Footer from '../Layout/Footer'

const BusinessPage = () => {

  return (
    <div className=' font-unbounded'>
           <div  className="h-screen bg-cover bg-center p-6 px-10" 
    style={{
      backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d6b7/2441/ba05a99396194d1aa1395b8e84524a3c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bk2-oPLoCX-jcAHL5MeeQaGGbbcC6L4vw-8EjZBfJCT71hl~KTbLN1oAZKQMR4DpiWhDgAEVIxclShVB6ZgABfjAJbryLGR5DDz7Y9SkYnZpQlLdimEdBDOcP1M8oAsiYwggjMfiDojxlFYrf6ButtFz4WD6OlaFRd8wxxvV1Ga~CzRi5xPUzbNwvQCVn-TX9gQQD-TCGEaRwoMRW6FDkSfDnJomMXneZ8shuZIH51QMr08Js2hVOR1LHB4nRrzg~IlZzzNbmKhUlsHXwpJLCLElrT~lSoQT5OTdvTM4fAU9GRzyZaVkXhgagvnhxKLpP3nQ6xhcjAPaOEt3duECZg__')`,
    }}>

    
     {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black opacity-60"></div>

     <NavBar/>
    
    <HeroSec
    whitetxt="Find Fuel And Run"
    yellowtxt="Your Business"
    whitetxt2="Smoothly!"
    description="Poder empowers drivers, businesses, and fleets to locate the nearest fuel stations, and improve their logistics across Nigeria."
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
        image1={`${process.env.PUBLIC_URL}/business/image 791 (1).png`}
        title1="Real-Time Station Locator"
        description1="Never waste time searching for fuel again. Locate the nearest fuel stations in real-time, view prices, and check station ratings to ensure quality."
        image2={`${process.env.PUBLIC_URL}/business/image 792 (1).png`}
        title2="Quality Assurance & User Ratings"
        description2="Check verified user ratings and quality scores for each station so you can fuel with confidence, knowing you’re getting top-quality fuel every time."
      />
      <AmazingFeatures
        image1={`${process.env.PUBLIC_URL}/business/Discovery Icon Container.png`}
        title1="Fleet Management Tool"
        description1="Tools to streamline fuel procurement, optimize routes, and check fuel prices in real-time—all designed to keep your fleet moving."
        image2={`${process.env.PUBLIC_URL}/business/image 794.png`}
        title2="Fuel Price Comparison"
        description2="Easily compare fuel prices across multiple stations to ensure you’re getting the best deal every time, wherever you are."
      />
      </section>

 {/* Amazing Features */}

 <FlexCard
      images={`${process.env.PUBLIC_URL}/business/Frame 1984077711.png`}
      altText="stations"
      title="We Fuel Your Journey"
      description="We ensure you ride with ease, as our platform connects you to nearby fuel stations with real-time prices and quality ratings, keeping your business running smoothly and efficiently."
    />
    

    <FlexCard2
  image={`${process.env.PUBLIC_URL}/business/Frame 1984077714.png`}
  altText="stations"
  title="We Make Your Work Easier"
  description="Our platform links industrial operators to dependable fuel stations, ensuring a steady supply so you can focus on growth without interruptions."

/>

{/* How does Poder Work? */}
<section className=" py-2 lg:py-8 lg:px-10 lg:mx-6">
<h2 className=" text-3xl font-semibold p-4 my-4">How does Poder Work?</h2>

<div className=" py-8 lg:flex lg:flex-row flex flex-col gap-5 px-4 w-full">

<div className="flex lg:w-1/2 gap-3">
<div className="z-10 "><img src='https://s3-alpha-sig.figma.com/img/3200/d22c/1afeac2fbbc2d24241789e23d765c571?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EgLoy7JV~ecg3UNhSpr0TZVWUumNmNcMC~7Ig-faaM~RqaCmpLP~-soMLFGkBO58bWURwLQNoqPE3Sl8~yeeEZyc-IAib5LniAxWQn~Wo89UtFp0PQR~Hy4Feg9RzZ3yuxXbzAxO2zJ2pfoR5qFlVCTqT4gmdAz72eDcO-AhcBT3SWHI2nLJTcIUwhkHh2YL9DAlZ65gdqysQtBfr98aG36M0GKincgchSdx-LunlXN2tc7QVc6lel0p67HkVRpMeyqPIzggcO26Q3TU7RxIPFFHGAUEJLZcnIhcMY3Qi0gIlZH346z8uqbAZw9982hsMua4Lt5dreK6rMt~gEjzvQ__' alt="" className=" pt-3 w-36 object-cover" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium"><span>Step 1:</span> Find Nearby Stations</h3>
    <p>Use real-time location-based data to find the nearest stations.</p>
   
    </div>
</div>

<div className="flex lg:w-1/2 gap-3">
<div className="z-10 "><img src="https://s3-alpha-sig.figma.com/img/f31a/a7ba/3e5d4c80c2e613ae2af6a52815a4b687?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O65--dMae3LSc66NZU1kAkybE-6~8duX7c-oO72Sqinar6SESsPqwQ04tIZdYUDVf14sEbcp4o79AbLHgCLxPVv5pld2MN1ADsHfuh32kzP3p8sITUS07uJY8kRtjvxPj92Nc1eZ2-DUwNW7~yX7m1grwxBgl1UcWGxZENu-P2sFjpU0Q5zkVdQS1vwjYDdyCi3BbPFgmSBYPY-scYWVgFSn6NHEHyT-nz0-0pWuz7a5Fb0SCtkX9X99YA2efO2L1BqPy5UZeivnhSNGSQcTZVBl2lb0lgBFZFlEQnW4b-hVMX3AYX0weLYjmIII5Jkftu7-yKRvlIJsjicoVye6sA__" alt="" className=" pt-3 w-36 object-cover" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium"><span>Step 2:</span>Compare Prices and Fuel Types</h3>
    <p>See fuel prices, fuel types at a glance and pick the best option for your need.</p>
    </div>
</div>
</div>

<div className=" py-8 lg:flex lg:flex-row flex flex-col gap-5 px-4 w-full">

<div className="flex lg:w-1/2 gap-3">
<div className="z-10 "><img src='https://s3-alpha-sig.figma.com/img/17b5/21a3/360c4aad5a732e2f28409c2ebe79dde1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nT0gOAHbcSxZxOi8fcc0nA6RS0uWwcvn7aqvVh6NO7j9szRiVe3ZoncwKGbJqYqRJeqbYfEekJKNHeCVMSOvHcxL6nfLGKFoHvaJUdVJMNrpNcEtqAqymPE57oeV4~uVJ416fsJirKstjW3rts1dRabAv3mOWTZj5nhC6vhQkxEP3AL-TuWWJ0fH1HApcsDAqv0ngvTR~RL7IcFchI7tBCO5nnQft3Mu98F56N7Q92Mla5eawzoHjhxX7tq8-T4L7HCvz8akk81fZiNVNtuTnGK1085TjJjTUgz6Gb-WArQ04tvMJLJofXrltWbfQYVxHxZiCWfYTx6q0ljMi8qZMA__' alt="" className=" pt-3 w-36 object-cover" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium"><span>Step 1:</span> Find Nearby Stations</h3>
    <p>Use real-time location-based data to find the nearest stations.</p>
   
    </div>
</div>

<div className="flex lg:w-1/2 gap-3">
<div className="z-10 "><img src="https://s3-alpha-sig.figma.com/img/eb0c/6ec8/9ec9306d30448c2ef735a12a1b60ad2c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6~dnNxpn9hMip2UVSHrh6prQDX-lPcUDfwtDwh6UW7q5tSy86p6s8kW0TqGGzfXm~~BQjJYuFjfuleh9QmZr0SsXckLdGZa~6Kv4sDNvi6c0haxWGThH~3iVuLl~HdzqXUMBDlJzZRqpXBEWYgEjHyKrP~HWqyU4XJD4v2bCvIpUX~hL2O6oeI5N2P0AM6BxZnEWlMiRqMZbtv2vN8ovPxvjeYlJ3ieSA~g0e6Z29t8YDv7a52pnTAP-ZroeB00aNK1R03zP2EEjZxf1iq1jAd85pzaNvelVRgvTyA0xYf7fE2PnjB5U0o16S35ExxWJ3MzkPRb5LnBJuIUmbMUSQ__" alt="" className=" pt-3 w-36 object-cover" /></div>
    <div className="flex flex-col gap-5 pr-20">
    <h3 className=" text-l font-medium"><span>Step 2:</span>Compare Prices and Fuel Types</h3>
    <p>See fuel prices, fuel types at a glance and pick the best option for your need.</p>
    </div>
</div>
</div>

</section>
    
    {/* WhoServe section */}
    <WhoServe/>

    {/* Testemonial */}
    <TestemonialSec/>
    {/* FAQ <section */}
    <FAQSec/>

    {/* contact sec */}
    <ContactSec/>

    <Footer/>
    </div>
  )
}

export default BusinessPage