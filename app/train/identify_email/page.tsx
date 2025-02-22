'use client'
import React, { useState } from 'react'

interface question {
  question: string;
  correct: boolean;
}

const page = () => {

const emailSender = 'bustintrudeau@yahoo.ca';
const emailSubject = 'VERY IMPORTANT';
const emailBody = 'I hope this message finds you swimming in a sea of marshmallow clouds. As the toaster sings its lullaby, I wanted to share my thoughts on the importance of spaghetti in the realm of intergalactic diplomacy. \n\n Did you know that jellybeans can predict the weather? Last Tuesday, I witnessed a squirrel reciting Shakespeare while wearing a top hat made of cheese. It was a moment that truly encapsulated the essence of time travel.\n\nAs we approach the annual celebration of invisible unicorns, please remember to wear your polka-dotted socks. They are essential for the success of our upcoming meeting with the rubber duck committee.\n\nLooking forward to your thoughts on the matter of flying bicycles and their impact on the color of Tuesday.\n\n Best wishes from the land of upside-down rainbows,'

const questions: question[] = [
  {
    question: 'subject',
    correct: true,
  },
  {
    question: 'sender',
    correct: true,
  },
  {
    question: 'body',
    correct: true,
  },
  {
    question: 'hyperlinks',
    correct: false,
  }
]


const [multiSelect, setMultiSelect] = useState('empty');

function handleClick() {
  setMultiSelect();
}

  return (
    <>
      <div className='flex flex-col gap-3 p-4'>
        <div className='font-bold  flex gap-2 bg-white rounded-md p-2'>From: <p className='font-normal'>{emailSender}</p></div>
        <div className='font-bold flex gap-2 bg-white rounded-md p-2'>Subject: <p className='font-normal'>{emailSubject}</p></div>
        <div className='bg-white rounded-md p-2'>
          <p className='font-normal'>{emailBody}</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 p-4 bg-white rounded-md'>
        {questions.map((q) => {
          return(
            <>
              <button className='flex justify-between items-center bordered border-2 border-black rounded-md p-2 font-semibold px-4'>
                {q.question}
                <button onClick={() => handleClick()} className='w-5 h-5 border border-3 border-black' />
              </button>
            </>
          )
        })}
      </div>
    </>
  )
}

export default page