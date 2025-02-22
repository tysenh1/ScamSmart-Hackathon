'use client'

import { useState } from 'react'
import { Button, Textarea, Card } from "flowbite-react";

export default function page() {

    const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);
    const [input, setInput] = useState('');


    const sendMessage = async () => {
        if (!input.trim()) return;

        setMessages([...messages, { role: "user", text: input }]);

        try {
            const response = await fetch("API KEY GOES HERE", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            setMessages([...messages, { role: "user", text: input }, { role: "bot", text: data }])
        } catch (error) {
            console.error("Error fetching chatbot response:", error)
        }

        setInput("");
    }

    return (
        <>
            <div className="w-screen h-full">
                <div>

                </div>
                <div className="flex flex-col gap-5 items-center">
                    <Card className="w-full max-w-lg mx-auto mt-10 h-[75vh] flex flex-col">
                        {/* Scrollable Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 px-4 py-2 rounded-lg break-words max-w-[75%] ${
                                        msg.role === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start mr-auto"
                                    }`}
                                >
                                    <strong className={(msg.role === "user" ? "mr-20" : "ml-20")}>{msg.role === "user" ? "You" : "Bot"}:</strong>
                                    <p className={(msg.role === "user" ? "mr-20 max-w-[300px]" : "ml-20 max-w-[300px]")}>{msg.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="mt-4 flex gap-2">
                            <Textarea
                                className="flex-1"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <Button onClick={sendMessage} color="blue">Send</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
