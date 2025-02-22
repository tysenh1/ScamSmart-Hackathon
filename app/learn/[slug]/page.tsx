import React from 'react'
import { cards } from '../page'

const page = ({params}: any) => {
    return (
        <h1 className='font-bold text-xl'>{params.slug}</h1>
    )
}

export default page