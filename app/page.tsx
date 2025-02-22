'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {useStateContext} from "@/app/StateContext";

interface WelcomeMessageCard {
  userName: string
}

interface StreakCard {
  streakCount: number,
  streakDescription: string,
  streakImage: string
}

interface WeakSpotsCard {
  cardDescription: string
}

const DashboardWelcomeMessage = () => {
  const [userName] = useState("Jerry");

  return (
    <div className="flex text-center w-3/4 p-10">
      <span className="text-4xl font-bold text-green-300" >Welcome back, {userName}. </span>

    </div>
  )
}

const StreakCardDisplay = () => {
  const [streakCount] = useState(14);
  
  return (
    <div className="flex items-center justify-center bg-gray-300 w-3/4 p-10 rounded-xl shadow-md">
      <span className="text-3xl font-semibold">Learning Streak: </span>
      <img
       src="/dashboardImages/streakFireImage.svg"
       alt="fireIcon"
       className="w-10 h-10"
      />
      <span className="text-3xl font-bold text-yellow-500">{streakCount} days!</span>
    </div>
  );
};


const WeakSpotsCardDisplay = () => {
  const [cardDescription] = useState("Find your weak spots and train.");

  return (
    <div className="flex text-center justify-center bg-gray-300 w-3/4 p-6 rounded-xl shadow-md">
      <Link href="/learn">
        <span className="text-2xl font-semibold">
          {cardDescription}
        </span>
      </Link>
    </div>
  );
};

const page = () => {
    const { setActivePage } = useStateContext();

    useEffect(() => {
        setActivePage("learn");
    }, [])
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center space-y-6 overflow-hidden">
    <h1 className="mb-4"></h1>
    <DashboardWelcomeMessage />
    <StreakCardDisplay />
    <WeakSpotsCardDisplay />
    </div>
  );
};


export default page;