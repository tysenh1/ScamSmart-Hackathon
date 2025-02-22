'use client'
import Learncard from "./Learncard";

import image1 from '../../public/learnImages/learnPhishing.png'
import image2 from '../../public/learnImages/learnRomance.png'
import image3 from '../../public/learnImages/learnEmployment.png'
import image4 from '../../public/learnImages/learnSpearfishing.png'
import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from "next/image";

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
        progressBar: 100
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

export default function page() {
    
    const [lastLearn, setLastLearn] = useState(cards[0]);

    return (
        <>
            <div className="w-screen h-full mt-8">
                <div className="flex flex-col gap-5 items-center">
                    <div className="w-[350px] h-48 bg-pink-200 rounded-xl ">
                        <Image src={lastLearn.imagePath} className="w-[350px] h-48 absolute object-cover rounded-xl" alt="asdfs" />
                        <div className="w-[350px] h-48 bg-pink-500 rounded-xl">

                        </div>
                    </div>
                    {cards.map((c) => {
                        return (
                            <Learncard id={c.id} title={c.title} imagePath={c.imagePath} badgeStatus={c.badgeStatus} progressBar={c.progressBar} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}
