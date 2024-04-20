"use client";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const words = [{
    text: "Developer.",
    className: "text-blue-500 dark:text-blue-500",
  },
  ];

  const connect = [
    {
      icon: "/assets/github.png",
      link: "https://github.com/JamiYashwanth",
    },
    {
      icon: "/assets/linkedin.png",
      link: "https://www.linkedin.com/in/jami-yashwanth/"
    },
    {
      icon: "/assets/gmail.png",
      link: "mailto:jamiyashwanth1718@gmail.com"
    },
    {
      icon: "/assets/instagram.png",
      link: "https://www.instagram.com/jami_yashwanth/",
    },]
  return (
    <main className={`flex h-full flex-col items-center justify-center`}>
      <div className="flex-col h-full w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div>
          <div className=" p-4 flex flex-col max-w-7xl items-center justify-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Jami Yashwanth <br />
            </h1>
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
        <div className="flex flex-row">
          {connect.map((item, index) => {
            return (
              <Link href={item.link} className="flex space-x-2 mx-2">
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={''}
                  className="flex-shrink-0 rounded-md shadow-2xl"
                />
              </Link>

            )
          })}
        </div>
      </div>

    </main>
  );
}
