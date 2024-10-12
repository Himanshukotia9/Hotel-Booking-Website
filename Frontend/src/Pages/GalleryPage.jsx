
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example images
const images = [
  { id: 1, src: "/landscape1.webp", alt: "Image 1" },
  { id: 2, src: "/landscape2.webp", alt: "Image 2" },
  { id: 3, src: "/landscape3.webp", alt: "Image 3" },
  { id: 4, src: "/landscape4.webp", alt: "Image 4" },
  { id: 5, src: "/landscape5.webp", alt: "Image 5" },
  { id: 6, src: "/landscape6.jpg", alt: "Image 6" },
  { id: 7, src: "/sliderImg1.jpg", alt: "Image 7" },
  { id: 8, src: "/sliderImg2.jpg", alt: "Image 8" },
  { id: 9, src: "/sliderImg3.jpg", alt: "Image 9" },
  { id: 10, src: "/sliderImg4.jpg", alt: "Image 10" },
  { id: 11, src: "/sliderImg5.jpg", alt: "Image 11" },
  { id: 12, src: "/sliderImg6.jpg", alt: "Image 12" },
  { id: 13, src: "/slider2-images/parking.jpg", alt: "Image 13" },
  { id: 14, src: "/slider2-images/service.jpg", alt: "Image 14" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage = images[selectedIndex];

  // Function to go to the next image
  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (
    <div className="container mx-auto px-4 py-8 mt-6 md:mt-12">
      <h1 className="text-4xl font-bold text-center my-8">Gallery</h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer" // To avoid breaking inside columns
            whileHover={{ scale: 1.05 }} // Zoom effect on hover
            whileTap={{ scale: 0.95 }} // Slight shrink on tap/click
            onClick={() => setSelectedIndex(index)} // Set the clicked image index
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close the modal when clicked outside the image */}
            <div
              className="absolute inset-0 z-40"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Modal Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="z-50 max-w-full h-4/5 object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            {/* Previous Button */}
            <button
              className="absolute left-4 z-50 bg-white p-2 rounded-full text-black font-bold text-xl"
              onClick={handlePrevious}
            >
              &#8249;
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 z-50 bg-white p-2 rounded-full text-black font-bold text-xl"
              onClick={handleNext}
            >
              &#8250;
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 text-white text-3xl font-bold"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

