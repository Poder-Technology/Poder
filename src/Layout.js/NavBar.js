import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa"; 
import { AiOutlineBars } from "react-icons/ai"; 

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>

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

    </div>
  )
}

export default NavBar