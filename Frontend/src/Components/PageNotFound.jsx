import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='font-roboto pt-12 flex items-center justify-center '>
        <div className='container mx-auto max-w-sm p-8 grid text-[#333333] sm:max-w-7xl sm:grid-cols-2 sm:gap-8 sm:p-3.5 lg:gap-x-20'>
            <div className='header flex flex-col justify-end'>
                <h1 className='text-6xl font-black lg:text-8xl'>404</h1>
                <h3 className='text-3xl font-black lg:text-5xl'>Page Not Found!</h3>
            </div>
            <img src="/404.svg" alt="not found" className='NotFoundImg w-full max-w-80 m-auto sm:max-w-xl ' />
            <div className='footer grid gap-8 place-content-baseline sm:max-w-80'>
                <p className='text-base '>We're sorry, the page you requested could not be found. Please go back to the homepage!</p>
                <button className='p-4 rounded-md text-base font-semibold bg-[#f9b23c] cursor-pointer transition-[0.3s] hover:bg-[#f49a20]'><Link to='/'>Go Home</Link></button>
            </div>
        </div>
    </div>
  )
}
