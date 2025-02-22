'use client'
import TrainCard from "./TrainCard";
import emailScamImage from '../../public/trainImages/imag5422qerewqqqqqqqqqqqqqqqqqqqqqqqqqqqq4532e.png'
import housingScamImage from '../../public/trainImages/ou8045908230894tpdafsfdsaadasffdsfdsut.png'
import textScamImage from '../../public/trainImages/text.png'
import DailyChallengeImage from '../../public/trainImages/Frame 9.png'
import underConTape1 from '../../public/trainImages/Rectangle 72.png'
import underConTape2 from '../../public/trainImages/Rectangle 72-1.png'
import underConGlass from '../../public/trainImages/image.png'
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useStateContext } from '../StateContext';
import checkMark from '../../public/checkmark.png';

interface trainCard {
    id: number,
    title: string;
    scamType: string;
    imagePath: StaticImageData;
}

export const cards: trainCard[] = [
    {
        id: 1,
        title: "Identify",
        scamType: 'Text',
        imagePath: textScamImage
    },
    {
        id: 2,
        title: "Find the Problem",
        scamType: 'Housing',
        imagePath: housingScamImage,
    },
    {
        id: 3,
        title: "Identify",
        scamType: 'Email',
        imagePath: emailScamImage
    }
]

export function setLastLearn() {
    setLastLearn()
}

export default function page() {
    
    const [lastLearn, setLastLearn] = useState(cards[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { activePage, setActivePage } = useStateContext();

    const dailChallengeFinished = true;

    useEffect(() => {
        setActivePage("train");
    }, [])

    return (
        <>
            <div className="w-screen h-full mt-8">
                <div className="flex flex-col gap-5 items-center">
                    <div className="w-[350px] h-44">
                        {dailChallengeFinished ? <div className="w-[350px] h-44 absolute flex justify-end items-end p-4">
                            <Image src={checkMark} className="w-12 z-40 mr-[-6px]"  alt="subway" />
                        </div>:<></>}
                        <div className="w-[350px] h-44 absolute flex justify-end items-end p-4">
                            <div className="border-4 border-black w-9 h-9"></div>
                        </div>
                        <Image src={DailyChallengeImage} className="w-[350px] h-44 bg-pink-200 rounded-xl " alt="subway logo">
                        </Image>
                    </div>
                    {cards.map((c) => {
                        return (
                            <TrainCard id={c.id} title={c.title} scamType={c.scamType} imagePath={c.imagePath} />
                        )
                    })}
                    <div className="w-[350px] h-28 rounded-xl">
                        <div className='w-[350px] h-28 absolute p-3 flex justify-center items-center'>
                            <h1 className='font-bold text-white text-3xl drop-shadow-lg'>COMING SOON</h1>
                        </div>
                        <Image className='w-[350px] h-28 mb-[-112px]' src={underConTape1} alt='subway logo' />
                        <Image className='w-[350px] h-28' src={underConGlass} alt='subway logo' />
                        <Image className='w-[350px] h-28 mt-[-109px]' src={underConTape2} alt='subway logo' />
                    </div>
                </div>
            </div>
        </>
    );
}
