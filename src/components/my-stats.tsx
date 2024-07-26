"use client";

import React, {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {DATA} from "@/data/resume";
import {Icons} from "@/components/icons";

interface Item {
    name: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

const calculateAge = (birthDate: Date) => {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970 + ageDate.getUTCMonth() / 12 + ageDate.getUTCDate() / 365);
};

const birthDate = new Date(DATA.birthDate);

const Stat = ({name, value, icon, color}: Item) => {
    return (
        <figure
            className={cn(
                "relative w-full cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="text-sm sm:text-lg font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-lg font-bold dark:text-white/60">
                        {value}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function MyStats({
                            className,
                        }: {
    className?: string;
}) {
    const [age, setAge] = useState(calculateAge(birthDate));
    const [githubData, setGithubData] = useState({
        followers: 0,
        stars: 0,
        repos: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setAge(calculateAge(birthDate));
        }, 50);

        fetch('https://api.github.com/users/abdellatif-laghjaj')
            .then(response => response.json())
            .then(data => {
                setGithubData(prevState => ({
                    ...prevState,
                    followers: data.followers,
                    repos: data.public_repos
                }));
            });

        fetch('https://api.github.com/users/abdellatif-laghjaj/repos')
            .then(response => response.json())
            .then(data => {
                const stars = data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
                setGithubData(prevState => ({
                    ...prevState,
                    stars: stars
                }));
            });

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            name: "My age",
            value: age.toFixed(9),
            icon: <Icons.birthday/>,
            color: "#00C9A7",
        },
        {
            name: "GitHub Followers",
            value: githubData.followers.toString(),
            icon: <Icons.followers/>,
            color: "#1E86FF",
        },
        {
            name: "Coding Hours",
            value: "890 hrs",
            icon: <Icons.time/>,
            color: "#FF3D71",
        },
        {
            name: "GitHub Stars",
            value: githubData.stars.toString(),
            icon: <Icons.stars/>,
            color: "#FFB800",
        },
        {
            name: "GitHub Repos",
            value: githubData.repos.toString(),
            icon: <Icons.repository/>,
            color: "#8A2BE2",
        },
        {
            name: "Site Views",
            value: "52",
            icon: <Icons.views/>,
            color: "#FF4500",
        },
    ];

    return (
        <div className={cn("w-full", className)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((item, idx) => (
                    <Stat {...item} key={idx}/>
                ))}
            </div>
        </div>
    );
}