// Hero.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// images for slider
import slider1 from "/sliderImg1.jpg"
import slider2 from "/sliderImg2.jpg"
import slider3 from "/sliderImg3.jpg"
import slider4 from "/sliderImg4.jpg"
import slider5 from "/sliderImg5.jpg"
import slider6 from "/sliderImg6.jpg"

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

    const images = [slider1, slider2, slider3, slider4, slider5, slider6];

    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <div id='text-section'  className='absolute top-40 left-10 md:left-32 md:top-80 w-4/5 flex flex-col items-center md:items-start text-white text-center z-10 px-4'>
                <h1 className='text-xl font-bold md:text-4xl md:font-normal'>Your Home Away From Home</h1>
                <p className='text-lg mb-4'>Experience the comfort and luxury of our hotel</p>
                <button type="button" className="text-white bg-transparent border border-white hover:bg-white hover:text-black font-bold rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore More</button>
            </div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': '30px',
                    '--swiper-navigation-z-index': '30',
                }}
                slidesPerView={1}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-full"
                id='image-section'
            >
                {images.map((image,index) => {
                    return <SwiperSlide key={index} className='flex justify-center items-center text-center text-lg bg-white'><img src={image} alt={`slider ${index}`} className='block w-full h-full object-cover'/></SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
