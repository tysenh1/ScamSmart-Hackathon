'use client'

import React, { useState } from 'react';

interface StreakCard {
  streakCount: number,
  streakDescription: string,
  streakImage: string
}

interface WeakSpotsCard {
  cardDescription: string
}

const StreakCardDisplay = () => {
  const [streakCount] = useState(14);
  
  return (
    <div className="flex items-center justify-center bg-white h-1/4 w-1/2 p-10 rounded-md">
      <span className="text-3xl font-bold">Your Streak: </span>
      <img
       src="/dashboardImages/streakFireImage.svg"
       alt="fireIcon"
       className="w=9 h-9"
      />
      <span className="text-3xl font-bold">{streakCount} days!</span>
    </div>
  );
};


const WeakSpotsCardDisplay = () => {
  const [cardDescription] = useState("Find your weak spots.");

  return (
    <div className="flex items-center justify-center bg-white w-1/3 h-1/0.75 py-4 px-10 my-6 p-5 rounded-md">
      <span className="text-3xl font-bold">{cardDescription}</span>
    </div>
  );
};

const page = () => {
  return (
    <div className="bg-green-500 h-full">
      This is the dashboard
    <StreakCardDisplay />
    <WeakSpotsCardDisplay />
    </div>
  );
}


export default page;