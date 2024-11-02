import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({bgimg, title, description}) {
  return (
    <div className={`relative h-full bg-cover bg-center flex flex-col justify-center  gap-3 py-4 pr-6 pl-8 md:pl-16 text-white ${bgimg} `}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className='relative z-10 flex flex-col items-start md:gap-4 transition-all duration-300 mx-2'>
        <h2 className='text-2xl font-bold md:text-5xl md:font-normal'>{title}</h2>
        <p className='text-lg md:text-xl pb-4'>{description}</p>
        <Link to={'/book-now'}><button type="button" className="text-white bg-transparent border border-white hover:bg-white hover:text-black font-bold rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">Book Now</button></Link>
      </div>
    </div>
  )
}
