import React from 'react'

const Nav = () => {
  return (
    <div className='row-span-1 w-full bg-white drop-shadow-lg'>
        <div className='grid grid-cols-5 h-full'>
          <button className='bg-slate-400'>learn</button>
          <button className='bg-slate-300'>train</button>
          <button className='bg-slate-400'>dashboard</button>
          <button className='bg-slate-300'>confirm</button>
          <button className='bg-slate-400'>counter</button>
        </div>
    </div>
  )
}

export default Nav