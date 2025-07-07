import { ElementType } from "react";
import { PenIcon } from "lucide-react";

export type LinkItem = {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    icon: ElementType;
    category: Category;
    description?: string;
    tags?: string[];
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
                icon: PenIcon,
                category: "Social Media",
                description: "Follow my daily life and coding journey",
                tags: ["social", "lifestyle", "coding"]
            },
            { 
                id: "linkedin",
                title: "LinkedIn",
                thumbnail: "/linkedin.svg",
                link: "https://www.linkedin.com/in/aurelia-sindhunirmala/",
                icon: PenIcon,
                category: "Social Media",
                description: "Professional profile and work experience",
                tags: ["professional", "career", "networking"]
            },
            {
                id: "tiktok",
                title: "Tiktok",
                thumbnail: "/tiktok.svg",
                link: "https://www.tiktok.com/@aacodee?_t=ZS-8xk0IvnxuEb&_r=1",
                icon: PenIcon,
                category: "Social Media",
                description: "Short-form content and tutorials",
                tags: ["content", "tutorials", "short-form"]
            },
            {
                id: "x",
                title: "X",
                thumbnail: "/x.svg", 
                link: "https://x.com/dayswithliaa",
                icon: PenIcon,
                category: "Social Media",
                description: "Thoughts and tech updates",
                tags: ["thoughts", "tech", "updates"]
            },
            { 
                id: "spotify",
                title: "Spotify",
                thumbnail: "/spotify.svg",
                link: "https://open.spotify.com/user/3163636363636363636363636363636363636363",
                icon: PenIcon,
                category: "Social Media",
                description: "Music I'm listening to",
                tags: ["music", "playlists", "entertainment"]
            },
        ]
    },
    "Productivity": {
        description: "Tools and resources I use daily",
        links: []
    },
    "Projects": {
        description: "Projects I've built and worked on",
        links: [
            {
                id: "toastology",
                title: "Toastology",
                thumbnail: "/toastology.png",
                link: "https://aureliasindhu.github.io/Toastology/index.html",
                icon: PenIcon,
                category: "Projects",
                description: "A fun toast notification library",
                tags: ["javascript", "library", "ui"]
            },
            {
                id: "dear-api",
                title: "Dear API ",
                thumbnail: "/dearapi.png",
                link: "https://dear-api.vercel.app/",
                icon: PenIcon,
                category: "Projects",
                description: "API documentation and testing tool",
                tags: ["api", "documentation", "testing"]
            },
            {
                id: "clickclack",
                title: "ClickClack",
                thumbnail: "/clickclack.png",
                link: "https://clickclack-aacode.vercel.app/",
                icon: PenIcon,
                category: "Projects",
                description: "Interactive typing game",
                tags: ["game", "typing", "interactive"]
            },
            {
                id: "resources-hub",
                title: "Resources Hub",
                thumbnail: "/resources.png",
                link: "https://resources-red.vercel.app/",
                icon: PenIcon,
                category: "Projects",
                description: "Curated learning resources",
                tags: ["resources", "learning", "curation"]
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
        link.description?.toLowerCase().includes(searchTerm) ||
        link.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
};

export const links = getAllLinks();