import React from 'react'
import Image from 'next/image'
import { getImageURL } from '../utils/image-util'
import badge from "../../public//learnImages/learnBadge.png"
import Link from 'next/link'
import { cards } from './page'
import { useState } from 'react'

const Learncard = (props: any) => {
  return (
    <Link href={`/learn/${((props.title).toLowerCase())}`} className='w-[350px] h-28 rounded-xl overflow-clip'>
        <div className='w-[350px] h-28 absolute p-2'>
          <h1 className='font-bold text-white text-2xl drop-shadow-lg'>{props.title}</h1>
        </div>
        <div className='w-[350px] h-28 absolute p-2'>
          <h1 className='font-bold text-white text-2xl drop-shadow-lg'>{props.type}</h1>
        </div>
        <Image className='w-[350px] h-full' key={props.id} src={props.imagePath} alt='subway logo' />
    </Link>
  )
}

export default Learncard