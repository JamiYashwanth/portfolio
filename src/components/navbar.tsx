import { cn } from "@/utils/cn";
import { FloatingNav } from "./ui/floating-navbar";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const navItems = [
        {
            name: "About",
            link: "/pages/about",
            path: 'about',
            icon: undefined,
        },
        {
            name: "Projects",
            link: "/pages/projects",
            path: 'projects',
            icon: undefined,
        },
        {
            name: "Achievements",
            link: "/pages/achievements",
            path: 'achievements',
            icon: undefined,
        },
        {
            name: "Resume",
            link: "/pages/resume",
            path: 'resume',
            icon: undefined,
        },
    ];

    return (
        <div className={cn("fixed mx-4 top-0 left-0 right-0 h-28 z-[5000]", className)} style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))" }}>            <div className="max-w-2xl mx-auto h-full flex items-center justify-between px-4">
            <div>
                <Link href="/">
                    <Image
                        height={0}
                        width={10}
                        src={"/assets/profile.jpeg"}
                        alt={"Me"}
                        unoptimized={true}
                        className="object-cover mt-1 flex object-top rounded-full h-11 w-12 border-2 border-white"
                    />
                </Link>
            </div>
            <FloatingNav navItems={navItems} />
        </div>
        </div>
    );
}
