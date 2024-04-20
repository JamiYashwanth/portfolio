"use client"
import React, { useState, useEffect } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Projects() {
    const [animate, setAnimate] = useState(false);

    const projects = [
        {
            title: "Musicxxx",
            description:
                "A feature-rich music web application with search, custom playlist creation, and user favorites, utilizing MongoDB for efficient user data storage. Secured user authentication with JWT",
            skills: [
                { title: 'React Native', src: '/assets/react.png' },
                { title: 'Angular', src: '/assets/angular.png' },
                { title: 'Node JS', src: '/assets/node-js.png' },
                { title: 'MongoDB', src: '/assets/mongodb.png' }
            ],
            links: [
                {
                    src: '/assets/github.png',
                    link: 'https://github.com/JamiYashwanth/Musixxx'
                }
            ]
        },
        {
            title: "01Bot",
            description:
                "A college Discord bot for tracking students in coding contests, offering features like generating coding rank lists in Excel , overall performance tracking, and monthly contest summaries , profile comparisons, and visual graphs to help analyze performance",
            skills: [
                { title: 'Python', src: '/assets/python.png' },
                { title: 'Selenium', src: '/assets/selenium.png' },
                { title: 'Discord API', src: '/assets/discord.png' },
                { title: 'MongoDB', src: '/assets/mongodb.png' }
            ],
            links: [
                {
                    src: '/assets/github.png',
                    link: 'https://github.com/JamiYashwanth/discord-bot'
                }
            ]
        },
        // Add more project items as needed
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
        <main className={`mx-3 mt-24 flex h-full flex-col items-center justify-center`}>
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transform translate-y-0 transition-all duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Projects</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </main>
    );
}
