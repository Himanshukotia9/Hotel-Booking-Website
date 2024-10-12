
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SloganComp ({slogan}) {
  // Array of texts to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogan.length); // Cycle through the text
    }, 3000); // Adjust the delay (in milliseconds) between text changes

    return () => clearInterval(interval);
  }, [slogan.length]);
    
  return (
    <div className="flex justify-center items-center h-32 md:h-40">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light font-Noto">
        <AnimatePresence mode='wait'>
          {/* Motion span wraps the current text to animate it */}
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }} // Start off-screen (below)
            animate={{ opacity: 1, y: 0 }}  // Animate into view (upward)
            exit={{ opacity: 0, y: -50 }}   // Exit off-screen (above)
            transition={{ duration: 0.5 }}  // Adjust transition duration for smoothness
            className="inline-block"
          >
            `.~ {slogan[currentIndex]} ~.`
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
