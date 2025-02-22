import React from 'react'
import Image from 'next/image'
import { getImageURL } from '../utils/image-util'
import badge from "../../public//learnImages/learnBadge.png"

const Learncard = (props: any) => {

  function getWidth(width: number) {
    return width;
  }

  return (
    <div className='w-[350px] h-28 rounded-xl overflow-clip'>
        {props.badgeStatus 
        ?
        <div className='w-[350px] h-28 p-3 absolute flex justify-end'>
          <Image src={badge} className='w-10 h-10' alt='hello' />
        </div>
        : 
        <></>
        }
        <div className='w-[350px] h-28 absolute overflow-clip flex flex-col justify-end rounded-b-xl'>
          <div style={{width: getWidth(props.progressBar) + "%"}} className={`h-3 w-[${getWidth(props.progressBar)}%] bg-red-500`}></div>
        </div>
        <div className='w-[350px] h-28 absolute p-2'>
          <h1 className='font-bold text-white text-2xl drop-shadow-lg'>{props.title}</h1>
        </div>
        <Image className='w-[350px] h-full' key={props.id} src={props.imagePath} alt='subway logo' />
    </div>
  )
}

export default Learncard