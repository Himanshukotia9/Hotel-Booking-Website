import React from 'react'

export default function PageBanner({title, text, img, height}) {
  return (
    <div className={`relative ${height} overflow-hidden bg-gray-900`}>
        {/* Background image */}
        <div className={`${img} absolute inset-0 w-full h-full bg-fixed bg-center bg-cover`}></div>
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-6">
          {text}
        </p>
      </div>
    </div>
  )
}
