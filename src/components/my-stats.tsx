"use client";

import React, {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {DATA} from "@/data/resume";
import {Icons} from "@/components/icons";
import StatCard from "@/components/stat-card";

const calculateAge = (birthDate: Date) => {
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970 + ageDate.getUTCMonth() / 12 + ageDate.getUTCDate() / 365);
};

const birthDate = new Date(DATA.birthDate);

export function MyStats({
                            className,
                        }: {
    className?: string;
}) {
    const [age, setAge] = useState(calculateAge(birthDate));
    const [githubData, setGithubData] = useState({
        followers: 0,
        stars: 0,
        repos: 0,
        forks: 0,
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
            })
            .catch(() => {
                setGithubData(prevState => ({
                    ...prevState,
                    followers: 0,
                    repos: 0
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
            })
            .catch(() => {
                setGithubData(prevState => ({
                    ...prevState,
                    stars: 0
                }));
            });

        fetch('https://api.github-star-counter.workers.dev/user/abdellatif-laghjaj')
            .then(response => response.json())
            .then(data => {
                setGithubData(prevState => ({
                    ...prevState,
                    stars: data.stars,
                    forks: data.forks
                }));
            })
            .catch(() => {
                setGithubData(prevState => ({
                    ...prevState,
                    stars: 0,
                    forks: 0
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
            name: "GitHub Forks",
            value: "52",
            icon: <Icons.fork/>,
            color: "#FF4500",
        },
    ];

    return (
        <div className={cn("w-full", className)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((item, idx) => (
                    <StatCard {...item} key={idx}/>
                ))}
            </div>
        </div>
    );
}