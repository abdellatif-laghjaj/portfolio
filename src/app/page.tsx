"use client";

import Hackathons from "@/components/views/hackathons";
import {lazy, useRef, useEffect, useState} from "react";
import confetti from "canvas-confetti";

// Lazy-loaded components
const Hero = lazy(() => import('@/components/views/hero'));
const About = lazy(() => import('@/components/views/about'));
const Experience = lazy(() => import('@/components/views/experience'));
const Education = lazy(() => import('@/components/views/education'));
const Skills = lazy(() => import('@/components/views/skills'));
const Projects = lazy(() => import('@/components/views/projects'));
const Activities = lazy(() => import('@/components/views/activities'));
const Contact = lazy(() => import('@/components/views/contact'));

export default function Page() {
    const [showConfetti, setShowConfetti] = useState(false);

    const isBirthday = () => {
        const today = new Date();
        const birthday = new Date(today.getFullYear(), 7, 2);
        return today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();
    };

    const fireConfetti = () => {
        const end = Date.now() + 10 * 1000; // 10 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) {
                setShowConfetti(false);
                return;
            }

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: {x: 0, y: 0.5},
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: {x: 1, y: 0.5},
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    useEffect(() => {
        if (isBirthday()) {
            setShowConfetti(true);
            fireConfetti();
        }
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50"/>
            )}

            {/* Hero */}
            <Hero/>

            {/* About */}
            <About/>

            {/* Experience */}
            <Experience/>

            {/* Education */}
            <Education/>

            {/* Skills */}
            <Skills/>

            {/* Hackathons */}
            <Hackathons/>

            {/* Projects */}
            <Projects/>

            {/* Activities */}
            <Activities/>

            {/* Contact */}
            <Contact/>
        </main>
    );
}