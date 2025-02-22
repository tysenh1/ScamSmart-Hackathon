import type { Metadata } from "next";
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
    <html lang="en" className="h-dvh">
      <body className="h-full flex flex-col bg-gradient-to-b from-brand-900 to-brand-500">
          <Header />
          <div className="h-full">
            <div className={"h-auto overflow-x-scroll pb-20"}>
              {children}
            </div>
          </div>
          <Nav />
        </body>
    </html>
  );
}
