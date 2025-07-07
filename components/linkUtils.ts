import { PenIcon } from "lucide-react";

export type LinkItem = {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    category: Category;
    description?: string;
};

export type Category = "Social Media" | "Productivity" | "Projects";

type CategoryData = {
    description: string;
    links: readonly LinkItem[];
};

type LinkCategories = {
    readonly [K in Category]: CategoryData;
};

// Link data organized by category
export const linkCategories: LinkCategories = {
    "Social Media": {
        description: "Connect with me on social platforms",
        links: [
            {
                id: "instagram",
                title: "Instagram",
                thumbnail: "/ig.svg",
                link: "https://www.instagram.com/aacodee/?hl=en",
                category: "Social Media",
                description: "Follow my daily life and coding journey",
            },
            { 
                id: "linkedin",
                title: "LinkedIn",
                thumbnail: "/linkedin.svg",
                link: "https://www.linkedin.com/in/aurelia-sindhunirmala/",
                category: "Social Media",
                description: "Professional profile and work experience",
            },
            {
                id: "tiktok",
                title: "Tiktok",
                thumbnail: "/tiktok.svg",
                link: "https://www.tiktok.com/@aacodee?_t=ZS-8xk0IvnxuEb&_r=1",
                category: "Social Media",
                description: "Short-form content and tutorials",
            },
            {
                id: "x",
                title: "X",
                thumbnail: "/x.svg", 
                link: "https://x.com/dayswithliaa",
                category: "Social Media",
                description: "Thoughts and tech updates",
            },
            { 
                id: "spotify",
                title: "Spotify",
                thumbnail: "/spotify.svg",
                link: "https://open.spotify.com/user/aurelia.sindhu?si=f72addd7e16f48d9",
                category: "Social Media",
                description: "Music I'm listening to",
            },
        ]
    },
    "Productivity": {
        description: "Tools and resources I use daily",
        links: [
            // {
            //     id: "notion",
            //     title: "Notion",
            //     thumbnail: "/notion.png",
            //     link: "https://www.notion.so/aureliasindhu/aaLink-1000000000000000000000000000000000000000",
            //     icon: PenIcon,
            //     category: "Productivity",
            //     description: "My personal knowledge base",
            // },
            // {
            //     id: "goodnotes",
            //     title: "GoodNotes",
            //     thumbnail: "/goodnotes.png",
            //     link: "https://www.goodnotes.com/app/download",
            //     icon: PenIcon,
            //     category: "Productivity",
            //     description: "My personal note-taking app",
            // },
            // {
            //     id: "obsidian",
            //     title: "Obsidian",
            //     thumbnail: "/obsidian.png",
            //     link: "https://obsidian.md/download",
            //     icon: PenIcon,
            //     category: "Productivity",
            //     description: "My personal note-taking app",
            // },
        ]
    },
    "Projects": {
        description: "Projects I've built and worked on",
        links: [
            {
                id: "toastology",
                title: "Toastology",
                thumbnail: "/toastology.png",
                link: "https://aureliasindhu.github.io/Toastology/index.html",
                category: "Projects",
                description: "A fun toast notification library",
            },
            {
                id: "dear-api",
                title: "Dear API ",
                thumbnail: "/dearapi.png",
                link: "https://dear-api.vercel.app/",
                category: "Projects",
                description: "API documentation and testing tool",
            },
            {
                id: "clickclack",
                title: "ClickClack",
                thumbnail: "/clickclack.png",
                link: "https://clickclack-aacode.vercel.app/",
                category: "Projects",
                description: "Interactive typing game",
            },
            {
                id: "resources-hub",
                title: "Resources Hub",
                thumbnail: "/resources.png",
                link: "https://resources-red.vercel.app/",
                category: "Projects",
                description: "Curated learning resources",
            },
        ]
    }
};

export const getAllLinks = (): LinkItem[] => {
    return Object.values(linkCategories).flatMap(category => [...category.links]);
};

export const getLinksByCategory = (category: Category): LinkItem[] => {
    return [...(linkCategories[category]?.links || [])];
};

export const getCategories = (): Category[] => {
    return Object.keys(linkCategories) as Category[];
};

export const searchLinks = (query: string): LinkItem[] => {
    const allLinks = getAllLinks();
    const searchTerm = query.toLowerCase();
    
    return allLinks.filter(link => 
        link.title.toLowerCase().includes(searchTerm) ||
        link.description?.toLowerCase().includes(searchTerm)
    );
};

export const links = getAllLinks();