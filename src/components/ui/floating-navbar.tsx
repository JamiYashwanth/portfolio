"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    const [activePath, setActivePath] = useState<string | null>(null);

    useEffect(() => {
        const currentPath = ['resume', 'about', 'projects', 'achievements'].find(path => pathname.split('/')[2] == path);
        setActivePath(currentPath || null);
    }, [pathname]);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    const navVariants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full lg:hidden"> {/* Smaller screens */}
                {/* Three-bar icon */}
                <button className="w-full justify-end items-center flex text-white focus:outline-none" onClick={toggleNavbar}>
                    <div>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </button>
                {/* Navbar items */}
                {isOpen && (
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="absolute top-full flex flex-1 flex-col left-0 mx-4 w-full overflow-hidden"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={navVariants}
                            >
                                {/* Pseudo-element for glassy background */}
                                <div className="absolute inset-0 backdrop-blur-sm shadow-lg"></div>

                                {/* Navbar items */}
                                {navItems.map((navItem, idx) => (
                                    <Link key={`link-${idx}`} href={navItem.link} onClick={() => toggleNavbar()}>
                                        <motion.div
                                            className="block py-2 px-4 text-gray-800 dark:text-white text-center  transition duration-300 z-10 relative"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {navItem.name}
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
            <div className="hidden lg:inline-flex"> {/* Larger screens */}
                <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4299E1_0%,#393BB2_50%,#4299E1_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {navItems.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={`
                            relative dark:text-neutral-50 items-center flex flex-col space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500
                            `}
                            >
                                <span className={`mx-4 text-sm ${activePath == navItem.path ? 'text-blue-300' : ''}`}>{navItem.name}</span>
                            </Link>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};
