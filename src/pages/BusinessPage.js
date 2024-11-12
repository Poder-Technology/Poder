import React from 'react'
import NavBar from '../Layout.js/NavBar'
import HeroSec from '../reusable/HeroSec'
import OurNumbers from '../reusable/OurNumbers'
import CategorySec from '../reusable/CategorySec'
import AmazingFeatures from '../reusable/AmazingFeatures'
import FeaturedStation from '../reusable/FeaturedStation'
import FlexCard from '../reusable/FlexCard'
import FlexCard2 from '../reusable/FlexCard2'

const BusinessPage = () => {

  return (
    <div>
           <div  className="h-screen bg-cover bg-center p-6 px-10" 
    style={{
      backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d6b7/2441/ba05a99396194d1aa1395b8e84524a3c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bk2-oPLoCX-jcAHL5MeeQaGGbbcC6L4vw-8EjZBfJCT71hl~KTbLN1oAZKQMR4DpiWhDgAEVIxclShVB6ZgABfjAJbryLGR5DDz7Y9SkYnZpQlLdimEdBDOcP1M8oAsiYwggjMfiDojxlFYrf6ButtFz4WD6OlaFRd8wxxvV1Ga~CzRi5xPUzbNwvQCVn-TX9gQQD-TCGEaRwoMRW6FDkSfDnJomMXneZ8shuZIH51QMr08Js2hVOR1LHB4nRrzg~IlZzzNbmKhUlsHXwpJLCLElrT~lSoQT5OTdvTM4fAU9GRzyZaVkXhgagvnhxKLpP3nQ6xhcjAPaOEt3duECZg__')`,
    }}>

    
     {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black opacity-60"></div>\

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
    

    </div>
  )
}

export default BusinessPage