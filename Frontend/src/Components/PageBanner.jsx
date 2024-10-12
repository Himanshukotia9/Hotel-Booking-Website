import React from 'react'

export default function PageBanner({title,text}) {
  return (
    <div className="relative h-4/5 overflow-hidden bg-gray-900">
        <div className='bg-RoomsBanner absolute inset-0 w-full h-full bg-fixed bg-center bg-cover'></div>
      <div className="relative h-screen flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-6">
          {text}
        </p>
      </div>
    </div>
  )
}
