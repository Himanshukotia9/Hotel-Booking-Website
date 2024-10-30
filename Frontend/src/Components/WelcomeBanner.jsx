import React from 'react'
import landscape1 from '/landscape1.jpg'
import landscape2 from '/landscape2.jpg'

export default function WelcomeBanner() {
  return (
    <div className="container mx-auto lg:mx-10 px-4">
      <div className="flex flex-col lg:flex-row items-start gap-8 my-12">
        {/* Image Section */}
        <div className="relative flex justify-center lg:w-1/2 mb-32">
          {/* First Image */}
          <div className="relative w-64 lg:w-96 h-auto z-20">
            <img
              src={landscape1}
              alt="landscape1"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          {/* Second Image */}
          <div className="absolute w-64 lg:w-80 h-auto top-40 lg:top-48 left-24 lg:left-72 z-10">
            <img
              src={landscape2}
              alt="landscape2"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 grid justify-center items-center text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-extralight font-Kaushan mb-4">Welcome to The Pink Magnolia Cottage</h1>
          <p className="text-lg font-Cutive lg:text-xl">
            Discover the charm of The Pink Magnolia Cottage, a boutique hideaway nestled in the serene
            hills of Mussoorie, India. Surrounded by lush greenery and magnificent views of the
            Himalayas, our cottage offers a perfect blend of cozy luxury and nature’s tranquility.
            Whether you're looking for a romantic escape or a family vacation, The Pink Magnolia
            Cottage promises an unforgettable stay!
          </p>
        </div>
      </div>
    </div>
  )
}
