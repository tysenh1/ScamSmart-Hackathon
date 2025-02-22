import React from 'react'
import Image from 'next/image'
import { getImageURL } from '../utils/image-util'
import badge from "../../public//learnImages/learnBadge.png"
import Link from 'next/link'
import { cards } from './page'
import { useState } from 'react'
import { writeJsonToLocalStorage, readJsonFromLocalStorage } from "@/app/jsonFunctions";

const Learncard = (props: any) => {

  function getWidth(width: number) {
    return width;
  }

  function updateJson(id: string) {
    const userData = readJsonFromLocalStorage("userData");

    userData.recentModule = id;

    writeJsonToLocalStorage("userData", userData);
  }
  
  return (
    <Link href={`/learn/${((props.title).toLowerCase())}`} onClick={() => {
        props.setLastLearn(cards[props.id - 1])
        updateJson(props.id)
    }} className='w-[350px] h-28 rounded-xl overflow-clip'>
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
    </Link>
  )
}

export default Learncard