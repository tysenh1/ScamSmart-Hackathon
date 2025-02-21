import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Nav from "./Nav";


export const metadata: Metadata = {
  title: "Scam Smart",
  description: "Made by Devs & Dragons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
        <body className="h-full grid grid-row-15">
          <Header />
          <div className="row-span-12">
            {children}
          </div>
          <Nav />
        </body>
    </html>
  );
}
