"use client"
import React, { useState, useEffect } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Achievements() {
    const [animate, setAnimate] = useState(false);

    const achievements = [
        {
            title: "ICPC Kanpur Regional 2020",
            description:
                "Regional Rank @85 | College Rank @1",
        },
        {
            title: "Hashcode 2022",
            description:
                "Global Rank @1057 | AIR @207 | College rank @1",
        },
        {
            title: "Kickstart 2022",
            description:
                "Round A @1142 | Round B @1449",
        }
    ];

    const profiles = [
        {
            title: "Codechef",
            description:
                "4 star | Max Rating @1862",
            links: [{
                src: '',
                link: "https://www.codechef.com/users/jamiyashwanth"
            }]
        },
        {
            title: "Codeforces",
            description:
                "Pupil | Max Rating @1394",
            links: [{
                src: '',
                link: "https://codeforces.com/profile/jami_yashwanth"
            }]
        },
        {
            title: "Leetcode",
            description:
                "Solved 200+ problems",
            links: [{
                src: '',
                link: "https://leetcode.com/jamiyashwanth18/"
            }]
        },
        {
            title: "GeeksForGeeks",
            description:
                "Solved 100+ problems",
            links: [{
                src: '',
                link: "https://auth.geeksforgeeks.org/user/jamiyashwanth18/practice/"
            }]
        }
    ];

    useEffect(() => {
        // Trigger animation after a short delay to allow the component to render first
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 100);

        // Clear timeout to prevent memory leaks
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className={`mx-3 mt-24 flex flex-col items-center justify-center `}>
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transform translate-y-0 transition-all duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Achievements</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={achievements} />
                </div>
            </div>
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transform translate-y-0 transition-all duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Coding Profiles</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={profiles} />
                </div>
            </div>
        </main>
    );
}
