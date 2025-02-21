import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='row-span-1 w-full bg-white drop-shadow-lg h-20 bottom-0 fixed'>
        <div className='grid grid-cols-5 h-20'>
            <Link href="/learn">
                <button className='bg-slate-400 w-full h-full'><Image src={"/navPictures/learn.png"} className={"m-auto"} width={40} height={40} alt={""}></Image></button>
            </Link>

            <Link href="/train">
                <button className='bg-slate-300 w-full h-full'><img src={"/navPictures/train.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
            </Link>

            <Link href="/dashboard">
                <button className='bg-slate-400 w-full h-full'><img src={"/navPictures/dashboard.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
            </Link>

            <Link href="/confirm">
                <button className='bg-slate-300 w-full h-full'><img src={"/navPictures/confirm.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
            </Link>

            <Link href="/counter">
                <button className='bg-slate-400 w-full h-full'><img src={"/navPictures/counter.png"} className={"m-auto"} width={40} height={40} alt={""}></img></button>
            </Link>

        </div>
    </div>
  )
}

export default Nav