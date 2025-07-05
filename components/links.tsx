"use client";

import { ReactNode } from "react";
import { PenIcon } from "lucide-react";

type Links = {
    title: string;
    thumbnail: string;
    link: string;
    icon: ReactNode;
    category: string;
};

export const links: Links[] = [
    // Social Media
    {
        title: "Instagram",
        thumbnail: "/ig.svg",
        link: "https://www.instagram.com/aacodee/?hl=en",
        icon: <PenIcon />,
        category: "Social Media",
    },
    { 
        title: "LinkedIn",
        thumbnail: "/linkedin.svg",
        link: "https://www.linkedin.com/in/aurelia-sindhunirmala/",
        icon: <PenIcon />,
        category: "Social Media",
    },
    {
        title: "Tiktok",
        thumbnail: "/tiktok.svg",
        link: "https://www.tiktok.com/@aacodee?_t=ZS-8xk0IvnxuEb&_r=1",
        icon: <PenIcon />,
        category: "Social Media",
    },
    {
        title: "X",
        thumbnail: "/x.svg", 
        link: "https://x.com/dayswithliaa",
        icon: <PenIcon />,
        category: "Social Media",
    },
    // // Productivity
    // {
    //     title: "Notion",
    //     thumbnail: "/globe.svg",
    //     link: "https://www.notion.so/",
    //     icon: <PenIcon />,
    //     category: "Productivity",
    // },
    // {
    //     title: "Google Drive",
    //     thumbnail: "/globe.svg",
    //     link: "https://drive.google.com/",
    //     icon: <PenIcon />,
    //     category: "Productivity",
    // },
    // Projects
    {
        title: "Toastology",
        thumbnail: "/toastology.png",
        link: "https://aureliasindhu.github.io/Toastology/index.html",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "Dear API ",
        thumbnail: "/dearapi.png",
        link: "https://dear-api.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "ClickClack",
        thumbnail: "/clickclack.png",
        link: "https://clickclack-aacode.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "Resources Hub",
        thumbnail: "/resources.png",
        link: "https://resources-red.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
];
