'use client'
import React, { useEffect } from 'react'
import { cards } from '../page';
import { useStateContext } from '../../StateContext';

const page = ({params}: any) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { activePage, setActivePage } = useStateContext();

    useEffect(() => {
        setActivePage("learn");
    }, [])

    return (
        <h1 className='font-bold text-xl'>{params.slug}</h1>
    )
}

export default page