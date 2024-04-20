import { Spotlight } from "@/components/ui/Spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

export default function About() {
    const experience = [
        {
            title: "Inncircles Technologies",
            description:
                "Product Developer",
            timePeriod: 'Jun 2023 - Present',
            skills: [{
                title: 'React Native',
                src: '/assets/react.png'
            }, {
                title: 'Angular',
                src: '/assets/angular.png'
            }, {
                title: 'Node JS',
                src: '/assets/node-js.png'
            }, {
                title: 'MongoDB',
                src: '/assets/mongodb.png'
            }]
        },
        {
            title: "Inncircles Technologies",
            role: 'Intern',
            description:
                "Product Developer Intern",
            timePeriod: 'Jul 2022 - May 2023',
            skills: [{
                title: 'React Native',
                src: '/assets/react.png'
            }, {
                title: 'Angular',
                src: '/assets/angular.png'
            }, {
                title: 'Node JS',
                src: '/assets/node-js.png'
            }, {
                title: 'MongoDB',
                src: '/assets/mongodb.png'
            }]

        },
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
    ]

    const education = [
        {
            title: `Vignan's Institute of Information Technology`,
            description: 'B.Tech Computer Science Engineering',
            timePeriod: '2019 - 2023'
        }
    ]

    return (
        <main className={`mx-3 mt-24 flex flex-col items-center justify-center `}>
            <div className="mt-4 justify-start w-full h-full " >
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Experience <br />
                </h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={experience} />
                </div>
            </div>
            <div className="mt-2 justify-start w-full h-full " >
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Responsibilities <br />
                </h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={responsibilities} />
                </div>
            </div>
            <div className="mt-2 justify-start w-full h-full " >
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Education <br />
                </h1>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={education} />
                </div>
            </div>
        </main>
    );
}