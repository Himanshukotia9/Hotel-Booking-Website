import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import RoomsPage from './Pages/RoomsPage'
import GalleryPage from './Pages/GalleryPage'
import ContactUsPage from './Pages/ContactUsPage'
import BookNowPage from './Pages/BookNowPage'
import NavbarComp from './Components/NavbarComp'
import { FooterComp } from './Components/FooterComp'

export default function App() {
  return (
    <BrowserRouter>
    <NavbarComp/>
      <div className=''>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/contactus" element={<ContactUsPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />
          <Route path="/booknow" element={<BookNowPage/>} />
        </Routes>
      </div>
      <FooterComp/>
    </BrowserRouter>
  )
}
