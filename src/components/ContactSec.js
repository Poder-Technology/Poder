import React from 'react'

const ContactSec = () => {
  return (

    <div>
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
    </div>
  )
}

export default ContactSec