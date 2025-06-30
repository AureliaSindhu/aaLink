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
    {
        title: "Instagram",
        thumbnail: "https://www.instagram.com/aacodee/?hl=en",
        link: "https://www.instagram.com/aacodee/?hl=en",
        icon: <PenIcon />,
        category: "Social Media",
    }
];