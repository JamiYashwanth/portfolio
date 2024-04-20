"use client"
import React, { useState, useEffect } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function About() {
    const [animate, setAnimate] = useState(false);

    const experience = [
        {
            title: "Inncircles Technologies",
            description: "Product Developer",
            timePeriod: 'Jun 2023 - Present',
            skills: [
                { title: 'React Native', src: '/assets/react.png' },
                { title: 'Angular', src: '/assets/angular.png' },
                { title: 'Node JS', src: '/assets/node-js.png' },
                { title: 'MongoDB', src: '/assets/mongodb.png' }
            ]
        },
        {
            title: "Inncircles Technologies",
            role: 'Intern',
            description: "Product Developer Intern",
            timePeriod: 'Jul 2022 - May 2023',
            skills: [
                { title: 'React Native', src: '/assets/react.png' },
                { title: 'Angular', src: '/assets/angular.png' },
                { title: 'Node JS', src: '/assets/node-js.png' },
                { title: 'MongoDB', src: '/assets/mongodb.png' }
            ]
        },
        // Add more experience items as needed
    ];

    const responsibilities = [
        {
            title: 'GeeksForGeeks VIIT student chapter',
            description: 'Competitive Programming Head'
        },
        {
            title: 'Codechef VIIT student chapter',
            description: 'Representative'
        }
    ];

    const education = [
        {
            title: `Vignan's Institute of Information Technology`,
            description: 'B.Tech Computer Science Engineering',
            timePeriod: '2019 - 2023'
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
        <main className="mx-3 mt-24 flex flex-col items-center justify-center">
            {/* Experience section */}
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Experience</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={experience} />
                </div>
            </div>
            {/* Responsibilities section */}
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Responsibilities</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={responsibilities} />
                </div>
            </div>
            {/* Education section */}
            <div className={`mt-4 w-full h-full ${animate ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Education</h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={education} />
                </div>
            </div>
        </main>
    );
}
