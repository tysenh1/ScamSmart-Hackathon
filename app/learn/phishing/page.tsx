'use client'
import React, { useState } from 'react'

const page = () => {
  
  
    const [completeColor, setCompleteColor] = useState("bg-white");
    const [completeWord, setCompleteWord] = useState("Complete Module");
  
    function handleCompleteClick(){
        setCompleteColor("bg-greener");
        setCompleteWord("Module Completed");
    }

    return (

    <div className='m-3'>
        <header>
            <h1 className='text-2xl font-bold'>Avoiding Phishing Scams</h1>
            <hr className='my-2 border-[2px] border-black'/>
            <br />
        </header>
        <main>
            <section>
                <h2 className='text-xl font-bold'>What is Phishing?</h2>
                <br />
                <p>Phishing is a type of cyber attack where attackers impersonate legitimate organizations to steal sensitive information such as usernames, passwords, and credit card details.</p>
            </section>
            <section>
                <br />
                <br />
                <h2 className='text-xl font-bold'>Tips to Avoid Phishing Scams</h2>
                <br />
                <ul className='flex flex-col gap-4'>
                    <li><strong>Be Skeptical of Unsolicited Emails:</strong> Always verify the sender's email address and be cautious of unexpected messages.</li>
                    <li><strong>Check for Spelling Errors:</strong> Phishing emails often contain spelling and grammatical mistakes.</li>
                    <li><strong>Hover Over Links:</strong> Before clicking, hover over links to see the actual URL. Ensure it matches the legitimate website.</li>
                    <li><strong>Use Two-Factor Authentication:</strong> Enable two-factor authentication on your accounts for an extra layer of security.</li>
                    <li><strong>Keep Software Updated:</strong> Regularly update your operating system and applications to protect against vulnerabilities.</li>
                    <li><strong>Report Suspicious Emails:</strong> If you receive a suspicious email, report it to your email provider.</li>
                </ul>
            </section>
        </main>
        <footer>
            <br />
            <p>&copy; 2023 Cybersecurity Awareness. All rights reserved.</p>
        </footer>
        <br />
        <br />
        <div className='w-full flex justify-center '>
            <button onClick={() => handleCompleteClick()} className={`${completeColor}
                 px-5 py-1 border border-3 border-black rounded-md text-2xl`}>{completeWord}</button>
        </div>
       
    </div>
  )
}

export default page