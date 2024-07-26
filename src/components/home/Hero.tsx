"use client";

import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import ResumeButton from "./ui/ResumeButton";
import TalkButton from "./ui/TalkButton";
import {FlipWords} from "../common/FlipWords";

// Custom hook for media query
const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

const Hero = ({id}: Readonly<{ id: string }>) => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <ResponsiveBox
            classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
            id={id}
        >
            <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
                <Column classNames="w-full items-center justify-center">
                    <div
                        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center text-center`}>
                        <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal xl:text-6xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold">
                            Hi there, I am
                        </p>
                        <FlipWords
                            words={["Abdellatif", "Master's Student", "AI Enthusiast"]}
                            className={`text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal xl:text-6xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold ${isMobile ? 'mt-2' : 'ml-2'} overflow-hidden text-ellipsis`}
                        />
                    </div>
                    <p className="text-center text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)] mt-4 max-w-md">
                        I am a Big Data and AI Master's student at the Polydisciplinary Faculty of Taroudant, Morocco.
                    </p>

                    <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
                        <TalkButton/>
                        <ResumeButton/>
                    </div>
                </Column>

                <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
                    <p className="text-base/6 font-medium">Follow me here</p>

                    <Row classNames="mt-2 gap-2">
                        {socialLinks.slice(0, 5).map((link, index) => {
                            return (
                                <Link
                                    key={`social-link-${index}`}
                                    href={link.url}
                                    target="_blank"
                                    className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                                    aria-label={`${link.name}`}
                                >
                                    <span className="text-base/6 text-[var(--whiteColor)]">
                                        <FontAwesomeIcon icon={link.icon}/>
                                    </span>
                                </Link>
                            );
                        })}
                    </Row>
                </div>
            </ConstrainedBox>
        </ResponsiveBox>
    );
};

export default Hero;