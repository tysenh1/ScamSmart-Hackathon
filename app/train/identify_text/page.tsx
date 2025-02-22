'use client'
import React, { useState } from 'react'

interface question {
  id: number;
  question: string;
  correct: boolean;
}

const page = () => {

  const textSender = '(780) 782-2847';
  const textBody = "We're excited to inform you that you're 2% cash reward is now available for redemption. This reward has been calculated based on your purchases since the activation of your Costco Membership. To redeem your reward, visit my12monthsredeem2025.info"

  const questions: question[] = [
    {
      id: 1,
      question: 'grammer',
      correct: false,
    },
    {
      id: 2.,
      question: 'sender',
      correct: true,
    },
    {
      id: 3,
      question: 'body',
      correct: true,
    },
    {
      id: 4,
      question: 'hyperlinks',
      correct: true,
    }
  ]


  const [multiSelect, setMultiSelect] = useState([false, false, false, false]);

  function handleClick(id: number) {


    const selectElements = [...multiSelect];

    // selectElements[id - 1] = !selectElements[id - 1]
    if (!selectElements[id - 1]) {
      selectElements[id - 1] = true
    } else {
      selectElements[id - 1] = false
    }

    setMultiSelect(selectElements)
  }

  return (
      <>
        <div className='flex flex-col gap-3 p-4'>
          <div className='font-bold  flex gap-2 bg-white rounded-md p-2'>From: <p className='font-normal'>{textSender}</p></div>
          <div className='bg-white rounded-md p-2'>
            <p className='font-normal'>{textBody}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3 p-4 bg-white rounded-md'>
          {questions.map((q) => {
            return(
                <>
                  <button className='flex justify-between items-center bordered border-2 border-black rounded-md p-2 font-semibold px-4'>
                    {q.question}
                    <button onClick={() => handleClick(q.id)} className='w-5 h-5 border border-3 border-black flex justify-center items-center'>

                      {(multiSelect[q.id - 1]) ? <div className='w-3 h-3 rounded-full bg-black' />:<></>}

                    </button>

                  </button>
                </>
            )
          })}
        </div>
      </>
  )
}

export default page