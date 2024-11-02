import React from 'react'
import { Link } from 'react-router-dom'

export default function BookNowComp() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 py-8 px-4 text-center'>
      <h2 className='text-4xl uppercase'>Want to book with us ?</h2>
      <Link to={'/book-now'}><button type="button" className="text-white bg-brown-700 hover:bg-brown-800 font-medium rounded-md text-base px-10 py-3">Book Now</button></Link>
    </div>
  )
}
