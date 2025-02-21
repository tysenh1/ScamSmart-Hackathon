import React from 'react'
import Image from "next/image";

const Nav = () => {
  return (
    <div className='row-span-1 w-full bg-white drop-shadow-lg h-20 bottom-0 fixed'>
        <div className='grid grid-cols-5 h-20'>
            <button className='bg-slate-400'><Image src={"/navPictures/learn.png"} className={"m-auto"} width={40} height={40} alt={""}></Image></button>
          <button className='bg-slate-300'><img src={"/navPictures/train.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
          <button className='bg-slate-400'><img src={"/navPictures/dashboard.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
          <button className='bg-slate-300'><img src={"/navPictures/confirm.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
          <button className='bg-slate-400'><img src={"/navPictures/counter.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
        </div>
    </div>
  )
}

export default Nav