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
import PrivacyPolicy from './Pages/PrivacyPolicy'
import PageNotFound from './Components/PageNotFound'
import Terms from './Pages/Terms'
import RefundPage from './Pages/RefundPage'

export default function App() {
  return (
    <BrowserRouter>
    <NavbarComp/>
      <div className=''>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<Terms/>} />
          <Route path="/refund-policy" element={<RefundPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
      <FooterComp/>
    </BrowserRouter>
  )
}
