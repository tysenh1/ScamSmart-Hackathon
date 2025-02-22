import React from 'react'
import Image from 'next/image'
import { getImageURL } from '../utils/image-util'
import badge from "../../public//learnImages/learnBadge.png"
import Link from 'next/link'
import { cards } from './page'
import { useState } from 'react'

const Learncard = (props: any) => {
  return (
    <Link href={`/train/${((props.title).toLowerCase())}_${((props.scamType).toLowerCase())}`} className='w-[350px] h-28 rounded-xl overflow-clip'>
        <div className='w-[350px] h-28 absolute px-4 py-2 '>
          <h1 className='font-bold text-white text-2xl drop-shadow-lg drop-shadow-good'>{props.title}</h1>
        </div>
        <div className='w-[350px] h-28 absolute p-4 flex justify-end items-end'>
          <h1 className='font-bold text-white text-2xl drop-shadow-lg'>{props.scamType}</h1>
        </div>
        <Image className='w-[350px] h-full' key={props.id} src={props.imagePath} alt='subway logo' />
    </Link>
  )
}

export default Learncard