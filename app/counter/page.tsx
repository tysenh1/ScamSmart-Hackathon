'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../StateContext';


const SupportMessage = () => {

    const { activePage, setActivePage } = useStateContext();

    useEffect(() => {
        setActivePage("counter");
    }, [])

    const message = [
        "Even if you've been scammed, help is available and you are NOT alone."
    ]

    return (
        <div className="bg-gray-300 border-l-4 text-black p-5 rounded-lg w-96 shadow-md">
            <h2 className="text-xl font-semibold mb-3 underline">Scams Can Happen to Anyone</h2>
            <p className="text-black">{message}</p>
        </div>
    );
};


const ImmediateActions = () => {
    
    const actions = [
        "1. Report the event and contact the police.",
        "2. Contact your financial institutions and monitor your accounts.",
        "3. Gather evidence of the event.",
        "4. Report the fraud event to an anti-fraud centre."
    ];
    
    return (
        <div className="bg-gray-300 border-l-4 text-black p-5 rounded-lg w-96 shadow-md">
            <h2 className="text-xl font-semibold mb-2 underline">Immediate Actions</h2>
            <ul className="list-disc pl-5 space-y-2">
                {actions.map((action, index) => (
                    <li key={index} className="text-black">{action}</li>
                ))}
            </ul>
        </div>
    );
};


interface ReportFraudCases {
    sectionDescription: string
}

const ReportFraudCases = () => {

    return (
        <div className="flex text-center justify-center bg-red-700 w-96 py-4 px-10 my-6 p-5 rounded-xl shadow-md">
            <Link href="https://www.canada.ca/en/revenue-agency/corporate/scams-fraud/report-scam.html" className="flex flex-col items-center space-y-2">
                <span className="text-2xl font-semibold underline">Report Cases of Fraud to the CRA</span>
                <img
                    src="/counterPageImages/alertIcon.svg"
                    alt="alertIcon"
                    className="w-9 h-9"
                />
            </Link>
        </div>
    );
};

export default function page() {
    return (
        <>
            <div className="bg-white min-h-screen w-full flex flex-col justify-start items-center space-y-10 pt-10">
            <h1 className="mb-2"></h1>
            <SupportMessage />
            <ImmediateActions />
            <ReportFraudCases />
            </div>
        </>
    );
};