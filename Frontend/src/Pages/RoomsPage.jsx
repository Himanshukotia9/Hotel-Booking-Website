// RoomsPage.jsx
import React from 'react'
import { Typography } from "@material-tailwind/react";
import Rooms from '../Components/Rooms';
import PageBanner from '../Components/PageBanner';
import ListComp from '../Components/ListComp';
import { cardsData, roomPolicy } from '../data';

export default function RoomsPage() {
  return (
    <div className="">
        <PageBanner 
            img={'bg-RoomsBanner'}
            height={'h-[600px]'}
            title={"Welcome to The Pink Magnolia Cottage"}
            text={"Experience serene luxury in the heart of Mussoorie's hills."}
        />
        <div className='py-12 mx-4'>
            {/* <h1 className="text-3xl md:text-5xl font-bold font-serif text-blue-gray-800 text-center mb-12">Check for Room Availability</h1> */}
            <Typography
            variant="h6"
                className="font-bold opacity-80 text-3xl md:text-5xl text-center font-serif mb-12"
                >
                Check for Room Availability
                </Typography>
            {cardsData.map((card, index) => (
                <Rooms
                key={card.id}
                title={card.title}
                subTitle={card.subTitle}
                description={card.description}
                imageUrl={card.imageUrl}
                reverse={index % 2 !== 1} // Alternate image position
                />
            ))}
            <ListComp points={roomPolicy} titlestyle={"font-bold text-2xl md:text-4xl"} pointsstyle={"font-bold text-xl md:text-2xl"}/>
        </div>
    </div>
  )
}
