/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Noto: "'Noto Sans', sans-serif",
      Kaushan: "'Kaushan Script', cursive",
      Cutive: "'Cutive Mono', monospace",
    },
    extend: {
      backgroundImage: {
        'RoomsBanner': "url('/RoomsBanner.jpg')",
        'aboutBanner': "url('/AboutBanner.jpg')",
        'contactBanner': "url('/ContactBanner.jpg')",
        'landscape3': "url('/landscape3.jpg')",
        'landscape4': "url('/landscape4.jpg')",
        'landscape5': "url('/landscape5.jpg')",
        'carousel1': "url('/slider2-images/balcony.jpg')",
        'carousel2': "url('/slider2-images/parking.jpg')",
        'carousel3': "url('/slider2-images/service.jpg')",
        'carousel4': "url('/slider2-images/drinks.jpg')",
        'carousel5': "url('/slider2-images/food.jpg')",
        'carousel6': "url('/slider2-images/storage.jpg')",
        'landscape6': "url('/landscape6.jpg')",
      },
      columns: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
      },
    },
  },
  plugins: [],
});

