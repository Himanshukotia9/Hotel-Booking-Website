import React from 'react'
import { Typography } from "@material-tailwind/react";

export default function ListComp({points, titlestyle, pointsstyle}) {
  return (
    <div className=''>
        {points.map(({ title, points }) => (
            <ul key={title} className='pl-4 md:pl-10 lg:pl-20 mb-4'>
                <Typography
                className={`mb-2 opacity-80 ${titlestyle}`}
                >
                {title} -&#8250;
                </Typography>
                {points.map((item) => (
                    <li key={item} className='list-disc ml-4'>
                        <Typography
                        className={`py-1.5 opacity-75 ${pointsstyle}`}
                        >
                            {item}
                        </Typography>
                    </li>
                ))}
          </ul>
        ))}
    </div>
  )
}
