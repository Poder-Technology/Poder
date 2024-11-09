import { FaTimes } from "react-icons/fa"; 
import { AiOutlineBars } from "react-icons/ai"; 
import { GoVerified } from "react-icons/go"; 
import { ImLocation } from "react-icons/im"; 
import { BsTwitter } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { CgInstagram } from "react-icons/cg"; 
import { AiOutlineRight } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import React, { useState } from 'react'

const testimonials = [
    {
      text: `"Poder has simplified fuel management for our entire fleet. It's easy to use and saves us time and money."`,
      author: "Alex T.",
      authorCon: "Fleet Manager, Green Transit Logistics",
      image: '/img/profile.png', 
    },
    {
      text: `"Thanks to Poder, managing our resources has never been this efficient. Highly recommend it to other businesses."`,
      author: "Maria L.",
      authorCon: "Fleet Manager, Green Transit Logistics",
      image: '/img/profile.png', 
    },
  ];

  const cardData = [
    {
      image: '/img/fluent-emoji-high-contrast_fuel-pump (1).png', // Path from the public folder
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

  const faqData = [
    { question: "What is Poder?", answer: "Poder is a platform for ... (add your answer here)" },
    { question: "What do I stand to benefit from joining this platform?", answer: "You can benefit by ... (add your answer here)" },
    { question: "Is Poder a trusted platform, with my card details?", answer: "Yes, Poder ensures ... (add your answer here)" },
    { question: "How can fuel station supervisors get their stations featured on the platform?", answer: "Station supervisors can ... (add your answer here)" },
    { question: "Is customer support available if I need help with the platform?", answer: "Customer support is available ... (add your answer here)" },
];


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-blue-400">
          <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left flex items-center justify-between py-4 text-white font-medium"
          >
              <span>{question}</span>
              <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''} text-2xl text-blue-400`}>
                  +
              </span>
          </button>
          {isOpen && <p className="text-blue-100 pb-4">{answer}</p>}
      </div>
  );
}

const BuyersPage = () => {

     const [currentSlide, setCurrentSlide] = useState(0);
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => setIsOpen(!isOpen);
 
      
        const nextSlide = () => {
          setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        };
      
        const prevSlide = () => {
          setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        };
      

  return (
    
    <div>
        <div  className="h-screen bg-cover bg-center p-6 px-10" 
    style={{
      backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b528/a209/478d12c14d7f910d9ca87912c8a60964?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl0qNG6T2IGb-fnFYE6NkR417uhHeLxMYnu4JzNxr-phXVs9SGaGqsJ75ou~mgfSE4rXv4hjVLIySCs1COWTBG5x8D3hNoOVNXxdw4UJdwbMO7a6~vUNEY5cKi6qE2oc7zUFEj1K3ZmoeSGkOKtt8zncTfzXGB1chijSfGLNfktySMCVibkShlj~-nXevRCv4s-XbmzSz3P0xZM7hLz3ZcSCUo0RWw6Dli5GDvShzPSdSn2S0Ar7ZpVW6JDvDLAkEznVLeSZUlsHFaTIX-4iyQq9XR3c8mSYGNg4ZaIZQiT78l8rx0sivllugC8oiaRnia3SP-SD6lCjleXx3nEFUg__')`,
    }}>

     {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black opacity-60"></div>

{/* Navbar */}
<nav className="fixed top-0 w-full z-30 flex items-center justify-between px-8 right-0 py-4 bg-opacity-90 bg-indigo-900 md:bg-inherit lg:relative">
    {/* Logo */}
    <div className="flex lg:items-center">
        <img src={`${process.env.PUBLIC_URL}/img/poder_5.png`} alt="Poder Logo" className="h-5 max-w-24 " />
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center space-x-6 text-white">
        <li><a href="#features" className="hover:text-blue-300">Features</a></li>
        <li><a href="#about" className="hover:text-blue-300">About</a></li>
        <li><a href="#contact" className="hover:text-blue-300">Contact Us</a></li>
    </ul>

    {/* Desktop Dropdown */}
    <div className="hidden md:block">
        <select className="p-2 border border-gray-300 rounded-md text-blue-700 bg-white">
            <option>Buyers</option>
            <option>Station Staff</option>
            <option>Business</option>
        </select>
    </div>

    {/* Mobile Hamburger Icon */}
    <div className="md:hidden text-3xl text-white cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <AiOutlineBars />}
    </div>
</nav>

{/* Mobile Full-Screen Menu */}
{isOpen && (
    <div className="fixed inset-0 bg-indigo-900 flex flex-col px-6 justify-center text-xl text-white z-20 pt-20">

    <div className="flex flex-col gap-5 p-3 border-b pb-12">
    <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/Vector.png`} alt="Poder Logo" className="h-5 max-w-24 " />
       <a href="#buyers" onClick={toggleMenu} className="hover:text-gray-300">Buyers</a>
       </div>

       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/staff.png`} alt="Poder Logo" className="h-5 max-w-24 " />
       <a href="#station-staff" onClick={toggleMenu} className="hover:text-gray-300">Station Staff</a>
       </div>

       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/bussines.png`} alt="Poder Logo" className="h-5 max-w-24 " />
       <a href="#business" onClick={toggleMenu} className="hover:text-gray-300">Business</a>
       </div>

    </div>

    <div  className="flex flex-col gap-5 p-3 pt-8 pb-12">
    <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/feature.png`} alt="Poder Logo" className="h-5 max-w-24 " />
       <a href="#features" onClick={toggleMenu} className="hover:text-gray-300">Features</a>
       </div>
       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/about.png`} alt="Poder Logo" className="h-5 max-w-24 " />
       <a href="#about" onClick={toggleMenu} className="hover:text-gray-300">About</a>
       </div>
       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/contact.png`} alt="Poder Logo" className="h-5 max-w-24 " />
      
       <a href="#contact" onClick={toggleMenu} className="hover:text-gray-300">Contact Us</a>
       </div>
    </div>


<div  className="flex flex-col gap-5 border-t p-3 pt-8">
<div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/mdi_fuel-station.png`} alt="Poder Logo" className="h-5 max-w-24 " />
      
       <a href="#featured-stations" onClick={toggleMenu} className="hover:text-gray-300">Featured Stations</a>
       </div>
       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/dashicons_testimonial.png`} alt="Poder Logo" className="h-5 max-w-24 " />
      
       <a href="#testimonials" onClick={toggleMenu} className="hover:text-gray-300">Testimonials</a>
       </div>
       <div className="flex gap-3 items-center ">
       <img src={`${process.env.PUBLIC_URL}/nav/mdi_faq.png`} alt="Poder Logo" className="h-5 max-w-24 " />
      
       <a href="#faqs" onClick={toggleMenu} className="hover:text-gray-300">FAQs</a>
       </div>  

</div>        

    </div>
)}
       

{/* hero section */}

<section className="relative bg-cover bg-center h-screen">
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 class="text-4xl md:text-5xl font-bold">
      Find <span class="text-yellow-500">Fuel</span> Near You in Seconds!
    </h1>
    <p className="mt-4 text-lg text-center">Search now and see everything you need to know about the nearest fuel stations without the usual hassle, traffic and endless queue</p>
    <div className="mt-6 relative w-full max-w-5xl">
      <input
        type="text"
        placeholder="Enter a location"
        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  </div>

</section>

    </div>

    {/* category Tabs */}

    <section className="flex items-center justify-center gap-4 py-2 bg-gray-200 rounded-full max-w-sm mx-auto my-10">
  <button className="px-6 py-2 text-white bg-blue-800 rounded-full">Buyers</button>
  <button className="px-6 py-2 text-gray-700 rounded-full hover:bg-gray-300">Station Staff</button>
  <button className="px-6 py-2 text-gray-700 rounded-full hover:bg-gray-300">Business</button>
</section>

<div className="items-center justify-center text-center mx-auto max-w-2xl px-6">
    <p>Get petrol, diesel or kerosene from any of the stations featured on our platform. 
    You can also communicate with the workers of the station, to ensure you get quality service!</p>
</div>

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

        {/* Featured Stations Section */}

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


  {/* Amazing Features */}
  <section className=" py-2 lg:py-8 lg:px-10 lg:mx-6">
    <h2 className=" text-3xl font-semibold p-4 my-4">Explore our amazing Features</h2>

    <div className=" lg:flex lg:flex-row flex flex-col gap-5 px-4">

        <div className="flex gap-3">
        <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/Discovery Icon Container.png`} alt="Station" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5 pr-20">
            <h3 className=" text-l font-medium">Station discovery system</h3>
            <p>Quickly find nearby fuel stations tailored to your needs, with real-time availability and service details for a seamless fueling experience.</p>
           <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>
            </div>
        </div>

        <div className="flex gap-3">
        <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/Discovery Icon Container (1).png`} alt="Station" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5 pr-20">
            <h3 className=" text-l font-medium">Fleet Management Services</h3>
            <p>Register your drivers and streamline fuel access—connect directly with stations for quick, hassle-free refueling to keep your fleet on the move.</p>
            <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>

            </div>
        </div>
    </div>
  </section>

  <section className="py-8 lg:px-10 lg:mx-6">

    <div className=" lg:flex lg:flex-row flex flex-col gap-5 px-4">

        <div className="flex gap-3">
        <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/image 793.png`} alt="Station" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5 pr-20">
            <h3 className=" text-l font-medium">Station discovery system</h3>
            <p>Quickly find nearby fuel stations tailored to your needs, with real-time availability and service details for a seamless fueling experience.</p>
           <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>
            </div>
        </div>

        <div className="flex gap-3">
        <div className="z-10 "><img src={`${process.env.PUBLIC_URL}/img/Discovery Icon Container (2).png`} alt="Station" className=" pt-3 object-cover" /></div>
            <div className="flex flex-col gap-5">
            <h3 className=" text-l font-medium">Fleet Management Services</h3>
            <p>Register your drivers and streamline fuel access—connect directly with stations for quick, hassle-free refueling to keep your fleet on the move.</p>
            <div className="flex items-center text-center relative">
           <a href="" className=" font-medium">Read more</a>
           <AiOutlineRight className=" absolute right-96 righ left-20 top-1.5 ml-4" />
           </div>

            </div>
        </div>
    </div>
  </section>

  {/* who we serve section */}

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


    {/* Testemonial Section */}

    <section className="py-8 text-center">
      <h2 className="text-2xl font-semibold">Customer Testimonials</h2>
      <div className="mt-6 flex items-center justify-center lg:gap-6">

      

        {/* Testimonial Slide */}
          <div className=" hidden md:block" >
          <AiOutlineRight 
            onClick={prevSlide}
            className="cursor-pointer lg:mr-32"

          />
          </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
        {testimonials.map((testimony, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-sm ">
          <p className="text-gray-700">{testimony.text}</p>

          <div className="flex items-center gap-2">
         
            <div><img src= {testimony.image} alt="" /></div>
            <div>
            <span className=" text-base font-semibold text-left">{testimonials[currentSlide].author}</span>
            <p className="">{testimony.authorCon}</p>
            </div>
          </div>
          
        </div>
        ))}

        </div>
          <div className=" hidden md:block">
          <AiOutlineRight
            onClick={nextSlide}
            className="cursor-pointer lg:ml-32"
          />
          </div>
    

       
         
        
          
      </div>
    </section>


    {/* FAQ SECTION */}
    <section className="bg-indigo-900 text-white flex flex-col-reverse md:flex-row items-center gap-4 px-8 py-16">
            {/* FAQ Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold">Got any Questions?</h2>
                <p className="text-lg text-blue-200">
                    Let us help, we're here to answer all your questions about Poder
                </p>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    ))}
                </div>
            </div>

            {/* Placeholder for Right Image */}
            <div className="md:block md:w-1/2">
                <img src={`${process.env.PUBLIC_URL}/img/Frame 1984077754.png`} alt="People discussing" className="w-full h-auto" />
                
            </div>
        </section>

        {/* contact form */}

    <section className="py-8 flex flex-col md:flex-row gap-2 justify-center items-center w-full">
      <div className=" w-1/2 flex flex-col items-center justify-center gap-4">
        <h3 className=" text-2xl font-semibold text-indigo-900">Still have questions?</h3>
        <span className=" text-base font-semibold">contact us</span>
      </div>

      <form action="" className="flex flex-col justify-center gap-3 w-full p-4 lg:w-1/2">
        <label htmlFor="" className=" text-sm font-normal">Enter your name</label>
        <input type="text" placeholder="Your full name" className=" p-2 rounded-lg border border-C5C6C9 max-w-custom"/>

        <label htmlFor="" className=" text-sm font-normal">Enter email address</label>
        <input type="text" placeholder="example@gmail.com" className=" p-2 rounded-lg border border-C5C6C9 max-w-custom" />

        <label htmlFor="" className=" text-sm font-normal">Enter your message</label>
        <textarea name="" id="" placeholder="your message" className=" p-2 rounded-lg border border-C5C6C9 max-w-custom h-48 " ></textarea>

      <div className=" lg:block flex items-center justify-center">
      <button className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded  items-center w-52 hover:bg-indigo-600 transition-colors duration-200">submit</button>
      </div>

      </form>
    </section>

{/* footer section */}
    <footer className="bg-indigo-900 text-white py-14">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">

    <div className="flex flex-col gap-4">
    <div class="z-10"><img src={`${process.env.PUBLIC_URL}/img/poder_5.png`} alt="My Image" /></div>
    <span className=" text-2xl font-bold">Our Service Updates</span>
      <p>Receive updates about our services from time to time.</p>
      <div>
      <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg mt-2"/>
      <button className="bg-yellow-500 px-4 py-2 rounded-r-lg mt-2">Subscribe</button>
      </div>
      <p className=" text-sm font-semibold mt-4">@2024 Poder Privacy Policy</p>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-2xl">Features</h4>
      <div className="flex flex-col ">
      <a href="#" className="text-gray-300 text-base font-normal">Station Management</a>
      <a href="#" className="text-gray-300 text-base font-normal">Employees Record Tracking Tracking</a>
      <a href="#" className="text-gray-300 text-base font-normal">Track record</a>
      <a href="#" className="text-gray-300 text-base font-normal">Contact Organization</a>
      </div>

      <div className=" flex gap-3 items-center">
        <CgInstagram />
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
      </div>

      <span className=" mt-10">Site Map</span>
    </div>

    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-2xl">Links</h4>
      <div className="flex flex-col ">
      <a href="#" className="text-gray-300 text-base font-normal">Home</a>
      <a href="#" className="text-gray-300 text-base font-normal">Features</a>
      <a href="#" className="text-gray-300 text-base font-normal">About</a>
      <a href="#" className="text-gray-300 text-base font-normal">Contact Us</a>

      </div>
     
      <span className=" mt-16">join poder</span>
    </div>
  </div>
</footer>



    </div>


  )
}

export default BuyersPage