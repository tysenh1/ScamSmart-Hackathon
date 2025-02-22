"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";

const Nav = () => {
    const [activePage, setActivePage] = useState('');

  return (
    <div className='row-span-1 w-full bg-white border-t border-gray-200 border-t-3 drop-shadow-xl h-20 bottom-0 fixed'>
        <div className='grid grid-cols-5 h-20'>
            <Link href="/learn" onClick={() => setActivePage("learn")}>
                <button className={(activePage == 'learn') ? 'bg-brand-500 w-full h-full' : 'bg-white w-full h-full'}><Image src={(activePage == 'learn') ? "/navPictures/learn_active.png" : "/navPictures/learn.png"} className={"m-auto"} width={30} height={30} alt={""}></Image></button>
            </Link>

            <Link href="/train" onClick={() => setActivePage("train")}>
                <button className={(activePage == 'train') ? 'bg-brand-500 w-full h-full' : 'bg-white w-full h-full'}><Image src={(activePage == 'train') ? "/navPictures/train_active.png" : "/navPictures/train.png"} className={"m-auto"} width={30} height={30} alt={""}></Image></button>
            </Link>

            <Link href="/" onClick={() => setActivePage("dashboard")}>
                <button className={(activePage == 'dashboard') ? 'bg-slate-400 w-full h-full' : 'bg-slate-300 w-full h-full'}><Image src={(activePage == 'dashboard') ? "/navPictures/dashboard_active.png" : "/navPictures/dashboard.png"} className={"m-auto"} width={40} height={40} alt={""}></Image></button>
            </Link>

            <Link href="/confirm" onClick={() => setActivePage("confirm")}>
                <button className={(activePage == 'confirm') ? 'bg-brand-500 w-full h-full' : 'bg-white w-full h-full'}><Image src={(activePage == 'confirm') ? "/navPictures/confirm_active.png" : "/navPictures/confirm.png"} className={"m-auto"} width={30} height={30} alt={""}></Image></button>
            </Link>

            <Link href="/counter" onClick={() => setActivePage("counter")}>
                <button className={(activePage == 'counter') ? 'bg-brand-500 w-full h-full' : 'bg-white w-full h-full'}><Image src={(activePage == 'counter') ? "/navPictures/counter_active.png" : "/navPictures/counter.png"} className={"m-auto"} width={30} height={30} alt={""}></Image></button>
            </Link>

        </div>
    </div>
  )
}

export default Nav