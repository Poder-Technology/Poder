import React, { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'


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

const TestemonialSec = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
      
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
  return (
    <div>
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
    </div>
  )
}

export default TestemonialSec