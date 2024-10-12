import React from 'react'
import WelcomeBanner from '../Components/WelcomeBanner'
import BookNowComp from '../Components/BookNowComp'
import Carousel from '../Components/Carousel'
import HeroCarousel from '../Components/HeroCarousel'
import ScrollCarousel from '../Components/ScrollCarousel'
import SloganComp from '../Components/SloganComp'


export default function HomePage() {
  return (
    <div>
        <Carousel/>
        <WelcomeBanner/>
        <HeroCarousel/>
        <SloganComp slogan={["Escape. Explore. Relax!", "Hillside Haven Awaits", "Nature’s Hidden Gem", "Experience Timeless Tranquility",]}/>
        <ScrollCarousel/>
        <BookNowComp/>
    </div>
  )
}
