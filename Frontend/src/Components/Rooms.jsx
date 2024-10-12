import React from 'react'

export default function Rooms({ title, subTitle, description, imageUrl, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-white shadow-lg rounded-lg p-6 mb-6 max-w-6xl mx-auto`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 py-4 md:px-6 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-blue-gray-800 font-Cutive">{title}</h2>
        <h4 className='font-semibold text-gray-800 font-Nunito mb-2'>{subTitle}</h4>
        <p className="text-gray-700 font-Nunito">{description}</p>
        <button type="button" className="text-white bg-brown-700 hover:bg-brown-800 font-medium rounded-md text-base px-4 py-2 mt-4">Book Now</button>
      </div>
    </div>
  )
}
