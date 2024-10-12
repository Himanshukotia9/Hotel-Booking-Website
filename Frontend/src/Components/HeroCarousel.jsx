// HeroCarousel.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from './Hero';

export default function HeroCarousel() {
  return (
    <div className="w-full h-[300px] md:h-[500px]">
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
                <SwiperSlide><Hero bgimg={"bg-landscape3"} title={"Where Every Stay Feels Like Home"} description={"Experience the warmth of cottage-style living with all the comforts of a luxury retreat."}/></SwiperSlide>
                <SwiperSlide><Hero bgimg={"bg-landscape4"} title={"Escape to Tranquility"} description={"Unwind in the serene hills of Mussoorie, where luxury meets nature’s calm."}/></SwiperSlide>
                <SwiperSlide><Hero bgimg={"bg-landscape5"} title={"Luxury Amidst Nature"} description={"Indulge in the perfect blend of elegant comfort and natural beauty."}/></SwiperSlide>
            </Swiper>
        </div>
  )
}
