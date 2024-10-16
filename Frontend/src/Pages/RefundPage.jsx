import React from 'react'
import ListComp from '../Components/ListComp'
import { refund } from '../data'

export default function RefundPage() {
  return (
    <div className='my-24 mx-4 lg:mx-32'>
        <h1 className='text-3xl font-bold text-brown-800 pl-4 md:pl-10 lg:pl-20 mb-8'>Cancellation and Refund Policy</h1>
        <ListComp points={refund} titlestyle={"font-bold text-xl md:text-2xl"} pointsstyle={"text-base md:text-lg"}/>
    </div>
  )
}
