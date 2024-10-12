import React from 'react'

export default function ContactUsPage() {
  return (
    <div className="relative">
        {/* Background image */}
        <div className='bg-contactBanner absolute w-full h-full bg-center bg-cover'></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="relative h-screen text-lg md:text-xl flex flex-col justify-center items-center text-center gap-4 text-white px-4">
            <p className="">
            Address: Chamba - Mussoorie Rd, Bhataghat, Mussoorie, Matholi, Uttarakhand - 248122
            </p>
            <a href="https://maps.app.goo.gl/Y8Z5J8fS2fuWSxkg7" target='_blank' className='hover:underline'>Get Directions &gt; <span>📍</span></a>
            <p>Telephone: <a className=' hover:text-blue-gray-100' href="tel:+919874598745">+91 9876598765</a><span> | </span>Email: <a className=' hover:text-blue-gray-100' href="mailto:thepinkmagnolia@gmail.com">thepinkmagnolia@gmail.com</a></p>
        </div>
    </div>
  )
}