import React from 'react'
import ListComp from '../Components/ListComp'
import { privacy } from '../data'

export default function PrivacyPolicy() {
  return (
    <div className='my-24 mx-4 lg:mx-32'>
      <ListComp points={privacy} titlestyle={"font-bold text-xl md:text-2xl"} pointsstyle={"text-base md:text-lg"}/>
    </div>
  )
}
