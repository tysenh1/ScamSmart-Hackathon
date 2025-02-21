import React from 'react'

const Nav = () => {
  return (
    <div className='row-span-1 w-full bg-white drop-shadow-lg'>
        <div className='grid grid-cols-5 h-full'>
            <button className='bg-slate-400'><img src={"/navPictures/learn.png"} className={"w-auto h-auto m-auto"}></img></button>
          <button className='bg-slate-300'><img src={"/navPictures/train.png"} className={"w-auto h-auto m-auto"}></img></button>
          <button className='bg-slate-400'><img src={"/navPictures/dashboard.png"} className={"w-auto h-auto m-auto"}></img></button>
          <button className='bg-slate-300'><img src={"/navPictures/confirm.png"} className={"w-auto h-auto m-auto"}></img></button>
          <button className='bg-slate-400'><img src={"/navPictures/counter.png"} className={"w-auto h-auto m-auto"}></img></button>
        </div>
    </div>
  )
}

export default Nav