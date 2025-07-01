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
        thumbnail: "/globe.svg",
        link: "https://www.instagram.com/aacodee/?hl=en",
        icon: <PenIcon />,
        category: "Social Media",
    },
    { 
        title: "LinkedIn",
        thumbnail: "/globe.svg",
        link: "https://www.linkedin.com/in/aurelia-code/",
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
        thumbnail: "/globe.svg",
        link: "https://aureliasindhu.github.io/Toastology/index.html",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "Dear API ",
        thumbnail: "/globe.svg",
        link: "https://dear-api.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "ClickClack",
        thumbnail: "/globe.svg",
        link: "https://clickclack-aacode.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
    {
        title: "Resources Hub",
        thumbnail: "/globe.svg",
        link: "https://resources-red.vercel.app/",
        icon: <PenIcon />,
        category: "Projects",
    },
];
