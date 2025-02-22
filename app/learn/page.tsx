'use client'
import Learncard from "./Learncard";

import image1 from '../../public/learnImages/learnPhishing.png'
import image2 from '../../public/learnImages/learnRomance.png'
import image3 from '../../public/learnImages/learnEmployment.png'
import image4 from '../../public/learnImages/learnSpearfishing.png'
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Image from "next/image";
import CircleProgress from "./CircleProgress";
import { useStateContext } from '../StateContext';

interface learnCard {
    id: number,
    title: string;
    imagePath: StaticImageData;
    badgeStatus: boolean;
    progressBar: number;
}

export const cards: learnCard[] = [
    {
        id: 1,
        title: "Phishing",
        imagePath: image1,
        badgeStatus: true,
        progressBar: 74
    },
    {
        id: 2,
        title: "Romance",
        imagePath: image2,
        badgeStatus: false,
        progressBar: 70
    },
    {
        id: 3,
        title: "Employment",
        imagePath: image3,
        badgeStatus: false,
        progressBar: 30
    },
    {
        id: 4,
        title: "Spearfishing",
        imagePath: image4,
        badgeStatus: false,
        progressBar: 5
    }
]

export function setLastLearn() {
    setLastLearn()
}

export default function page() {
    
    const [lastLearn, setLastLearn] = useState(cards[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { activePage, setActivePage } = useStateContext();

    useEffect(() => {
        setActivePage("learn");
    }, [])

    return (
        <>
            <div className="w-screen h-full mt-8">
                <div className="flex flex-col gap-5 items-center ">
                    <div className="w-[350px] h-48 bg-pink-200 rounded-xl ">
                        <div className="w-[350px] h-48 absolute rounded-xl z-40">
                            <CircleProgress percentage={lastLearn.progressBar} circleWidth={150} />
                        </div>
                        <Image src={lastLearn.imagePath} className="w-[350px] h-48 absolute object-cover rounded-xl" alt="asdfs" />
                        <div className="w-[350px] h-48 absolute p-3 text-white font-bold text-3xl rounded-xl drop-shadow-md outline-4 outline-gray-700 drop-shadow-good">
                            Continue Module 
                        </div>
                    </div>
                    {cards.map((c) => {
                        return (
                            <Learncard id={c.id} title={c.title} imagePath={c.imagePath} badgeStatus={c.badgeStatus} progressBar={c.progressBar} setLastLearn={setLastLearn} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}
