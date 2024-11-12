import React from 'react'
import { BsTwitter } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { CgInstagram } from "react-icons/cg"; 

const Footer = () => {
  return (
    <div>
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

export default Footer