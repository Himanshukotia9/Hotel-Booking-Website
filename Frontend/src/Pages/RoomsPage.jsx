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
            img={'bg-aboutBanner'}
            height={'h-[80vh]'}
            title={"Welcome to The Pink Magnolia Cottage"}
            text={"Experience serene luxury in the heart of Mussoorie's hills."}
        />
        
    </div>
  )
}
