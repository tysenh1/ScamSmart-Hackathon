import Link from 'next/link';
import React from 'react'

const Result = () => {


    const numGames = 5;
    const numRight = 12;
    const numWrong = 6;
    const explanation = 'The message is attempting to create a sense of panic, pushing you into clicking the link without thinking. Most legitimate services will give you a reasonable amount of time to resolve payment issues and will not make demands through SMS.';

    function handleClick() {

    }

    return (
        <div className='fixed h-5/6 w-full flex pb-8 justify-center items-center '>
            <div className='w-[95%] h-[95%] bg-white rounded-xl box-shadow-good flex flex-col items-center gap-12 justify-between py-5 px-4'>
                <h1 className='font-bold text-3xl'>Here is your results:</h1>
                <div className='flex flex-col '>
                    <h2 className='font-semibold text-xl'>Review:</h2>
                    <p className='text-start'>You played: {numGames} games, and got {numRight}/{numRight + numWrong} correct!</p>
                    <br />
                    <h2 className='font-semibold text-xl'>Explanation:</h2>
                    <p>{explanation}</p>
                </div>
                <Link href={'/'} className='w-5/6 bg-brand-600 border-2 border-brand-700 p-3 flex justify-center items-center '>FINISH</Link>
            </div>
        </div>
    )

}

export default Result