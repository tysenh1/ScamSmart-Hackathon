'use client'

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useStateContext } from './StateContext';

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
    <div className="flex items-center justify-center bg-white h-1/4 w-1/0.75 p-10 rounded-xl">
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
    <div className="flex items-center justify-center bg-white w-1/2 h-1/0.75 py-4 px-10 my-6 p-5 rounded-xl">
      <Link href="/learn">
        <span className="text-3xl font-bold">
          {cardDescription}
        </span>
      </Link>
    </div>
  );
};

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { activePage, setActivePage } = useStateContext();

  useEffect(() => {
      setActivePage("dashboard");
  }, [])

  return (
    <div className="bg-gray-300 h-full flex flex-col justify-center items-center">
      This is the dashboard
    <StreakCardDisplay />
    <WeakSpotsCardDisplay />
    </div>
  );
}


export default page;