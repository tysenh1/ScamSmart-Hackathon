import React from 'react'

const Result = () => {
  
  const numGames = 5;
  const numRight = 12;
  const numWrong = 6;

    return (
    <div className='w-5/6 h-5/6 bg-white rounded-xl'>
        <h1 className='font-bold text-3xl'>Here is your results!</h1>
        <hr className='my-1' />
        <br />
        <br />
        <h2 className='font-semibold text-xl'>Review:</h2>
        <br />
        <p>You played: {numGames} games, and got {numRight}/{numRight + numWrong} correct!</p>
        
    </div>
  )
}

export default Result