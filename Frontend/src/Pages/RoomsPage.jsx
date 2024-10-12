import React from 'react'
import Rooms from '../Components/Rooms';
import Room1 from "/public/Rooms/roomImg1.webp"
import Room2 from "/public/Rooms/roomImg2.webp"
import Room3 from "/public/Rooms/roomImg3.webp"
import Room4 from "/public/Rooms/roomImg4.jpeg"
import Room5 from "/public/Rooms/roomImg5.webp"
import Room6 from "/public/Rooms/roomImg6.webp"
import PageBanner from '../Components/PageBanner';

export default function RoomsPage() {
    const cardsData = [
        {
          id: 1,
          title: "Standard room",
          subTitle: "A Cozy Retreat with Modern Comforts",
          description: "The Standard Room offers a delightful blend of comfort and simplicity. Perfect for solo travelers or couples, this room features tasteful décor, a plush bed, and all the modern amenities you need for a restful stay. Enjoy a peaceful escape with views of the cottage’s serene surroundings.",
          imageUrl: Room1,
        },
        {
          id: 2,
          title: "Deluxe Room",
          subTitle: "Elevated Comfort with Scenic Views",
          description: "The Deluxe Room provides a spacious retreat with elegant furnishings and scenic views of the hills. Ideal for those seeking both luxury and affordability, this room offers a king-sized bed, a private sitting area, and large windows that fill the space with natural light, making your stay truly refreshing.",
          imageUrl: Room2,
        },
        {
          id: 3,
          title: "Studio room",
          subTitle: "Spacious and Stylish, Perfect for Longer Stays",
          description: "The Studio Room is a haven of modern design and convenience, offering extra space for those looking to stay a bit longer. With a cozy living area, contemporary décor, and a fully equipped kitchenette, it’s perfect for travelers who enjoy the comforts of home with a touch of elegance.",
          imageUrl: Room3,
        },
        {
          id: 4,
          title: "Junior suite",
          subTitle: "Refined Elegance and Relaxation Combined",
          description: "The Junior Suite exudes sophistication, offering a luxurious space complete with a comfortable king-sized bed, a stylish lounge area, and a private balcony with stunning views of the surrounding hills. Ideal for couples or small families, this suite ensures both relaxation and indulgence.",
          imageUrl: Room4,
        },
        {
            id: 5,
            title: "Executive suite",
            subTitle: "Exclusive Luxury with Modern Amenities",
            description: "The Executive Suite offers a perfect blend of luxury and convenience. Boasting a spacious bedroom, an elegantly designed living room, and a workspace, this suite is perfect for business travelers or those seeking added luxury. Large windows and a private balcony invite the beauty of the hills right into your suite.",
            imageUrl: Room5,
        },
        {
            id: 6,
            title: "Presidential suite",
            subTitle: "Unparalleled Luxury and Unmatched Views",
            description: "The Presidential Suite is the epitome of opulence, offering the finest in luxury accommodation. With expansive living and dining areas, a grand bedroom, and a private terrace with panoramic views, this suite is designed for those seeking the very best. Every detail of this suite speaks of elegance and indulgence, making your stay truly unforgettable.",
            imageUrl: Room6,
        },
    ];
  return (
    <div className="">
        <PageBanner 
            title={"Welcome to The Pink Magnolia Cottage"}
            text={"Experience serene luxury in the heart of Mussoorie's hills."}
        />
        <div className='py-12 mx-4'>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-blue-gray-800 text-center mb-12">Check for Room Availability</h1>
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
        </div>
    </div>
  )
}
