"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import LinesEllipsis from 'react-lines-ellipsis';
import { HoverBorderGradient } from './hover-border-gradient';
import { FollowerPointerCard } from './following-pointer';

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link?: string;
        role?: string;
        timePeriod?: string;
        skills?: {
            title: string;
            src: string;
        }[];
        links?: {
            src: string;
            link: string;
        }[];
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 ${className}`}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ transition: 'transform 0.3s ease' }} // Smooth transition
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full rounded-lg bg-neutral-200 dark:bg-gray-900/[0.5]"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                                style={{
                                    background: "linear-gradient(to bottom right, #eaf4f4, #adb5bd)", // White gradient background
                                    // background: "linear-gradient(to bottom right, #00141f, #0a1128)",

                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card hovered={hoveredIndex === idx}>
                        <CardTitle hovered={hoveredIndex === idx} >{item.title}</CardTitle>
                        <div className={`text-xs  mt-1 ${hoveredIndex === idx ? 'text-black' : 'text-zinc-400'}`}>{item.timePeriod}</div>
                        <CardDescription text={item.description} hovered={hoveredIndex === idx} />
                        <div className={`flex w-100 ${item.skills ? 'mt-4' : ''}`}>
                            {item.skills && item.skills.map((skill, idx) => {
                                let random = (Math.random() % 1000).toString();
                                return (
                                    <div key={idx}>
                                        <a data-tooltip-id={random} data-tooltip-content={skill.title}>
                                            <img src={skill.src} height={20} width={20} alt="" className="mr-1.5" />
                                        </a>
                                        <Tooltip id={random} />
                                    </div>
                                );
                            })}
                            <div className={`flex flex-1 ${item.skills ? 'justify-end' : ''}`}>
                                {item.links && item.links.length > 0 && (
                                    item.links.map((link, idx) => (
                                        <a key={idx} href={link.link} target="_blank" rel="noreferrer">
                                            {link.src ? <img src={link.src} height={20} width={20} alt="" className="mr-1.5" /> : <span className="text-sm text-zinc-400">Link</span>}
                                        </a>
                                    ))
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
    hovered,
}: {
    className?: string;
    children: React.ReactNode;
    hovered: boolean;
}) => {
    return (
        // <FollowerPointerCard title="">
        <motion.div
            className={`rounded-md h-full w-full py-2 px-4 overflow-hidden relative z-20 ${className}`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }} // Increase scale on hover
            transition={{ duration: 0.3 }} // Smooth transition
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </motion.div>
        // </FollowerPointerCard>
    );
};

export const CardTitle = ({
    className,
    children,
    hovered,
}: {
    className?: string;
    children: React.ReactNode;
    hovered: boolean;
}) => {
    return (
        <h4 className={`tracking-wide mt-4 ${hovered ? 'text-black font-bold' : 'text-zinc-100'} ${className}`}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    text,
    hovered,
}: {
    className?: string;
    text: string;
    hovered: boolean;
}) => {
    return (
        <div
            className={`mt-6 tracking-wide leading-relaxed text-sm ${hovered ? 'text-black' : 'text-zinc-400'} ${className}`}
        >
            <LinesEllipsis
                text={text}
                maxLine='4'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />
        </div>
    );
};
