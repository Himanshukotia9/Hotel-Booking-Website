// NavbarComp.jsx
import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import logo from "/logo.png"
import { Link } from 'react-router-dom';
  
  function NavItem({ label, link }) {
    return (
        <Link to={link}>
          <Typography as="li" color="blue-gray" className="py-1 px-4 md:ml-0 text-lg font-bold font-Nunito hover:bg-black hover:text-white hover:rounded-full">
            {label}
          </Typography>
        </Link>
    );
  }
  
  function NavListLeft() {
    return (
      <ul className="mb-2 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavItem label="Home" link="/" />
        <NavItem label="Rooms" link="/rooms" />
        <NavItem label="Gallery" link="/gallery" />
      </ul>
    );
  }
  function NavListRight() {
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavItem label="Contact Us" link="/contactus" />
        <NavItem label="About Us" link="/aboutus" />
        <NavItem label="Book Now" link="/booknow" />
      </ul>
    );
  }

export default function NavbarComp() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);


  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <motion.nav 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.9 }} 
    color="transparent" fullWidth className={`fixed top-0 left-0 py-1 w-full z-50 transition-colors duration-1000 ${
      isScrolled ? "bg-[#ddbea9] shadow-lg" : "bg-white bg-opacity-30"
    }`}>
      <div className="container px-4 lg:px-0 mx-auto flex items-center justify-center text-blue-gray-900">
        <div className="hidden lg:block">
          <NavListLeft />
        </div>
        <div>
            <img className='size-16 rounded-full md:mx-16' src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <NavListRight />
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-[#ece4dc] p-2 mx-2">
          <NavListLeft />
          <NavListRight />
        </div>
      </Collapse>
    </motion.nav>
  )
}

