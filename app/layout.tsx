"use client"
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Nav from "./Nav";
import {useState} from "react";
import { StateProvider } from "@/app/StateContext";
import {readJsonFromLocalStorage, writeJsonToLocalStorage} from "@/app/jsonFunctions";

// export const metadata: Metadata = {
//   title: "Scam Smart",
//   description: "Made by Devs & Dragons",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (!readJsonFromLocalStorage("userData")) {
      const userData = {
          "recentModule": 1,
          "games": {
              "gamesPlayed": 0,
              "gamesWon":  0,
              "correctRatio": 0
          },
          "isDailyComplete": false,
          "currentModuleProgress": 0,
          "moduleCompletion": {
              "0": 0,
              "1": 0,
              "2": 0,
              "3": 0
          },
          "currentStreak": 14
      }
      writeJsonToLocalStorage("userData", userData);
  }

  const [activePage, setActivePage] = useState('');

  return (
    <html lang="en" className="h-dvh">
      <StateProvider>
          <body className="h-full flex flex-col gb-gray-50">
          <Header />
          <div className="h-full">
              <div className={"h-auto overflow-x-scroll pb-20 bg-gradient-to-b from-brand-900 to-brand-500"}>
                  {children}
              </div>
          </div>
          <Nav activePage={activePage} setActivePage={setActivePage} />
          </body>
      </StateProvider>

    </html>
  );
}
