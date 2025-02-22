"use client"
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Nav from "./Nav";
import {useState} from "react";
import { StateProvider } from "@/app/StateContext";

export const metadata: Metadata = {
  title: "Scam Smart",
  description: "Made by Devs & Dragons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
