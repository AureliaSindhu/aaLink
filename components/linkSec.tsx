import Link from "next/link";
import { links } from "./links";

export default function LinkSec() {
    return (
        <div className="flex flex-col gap-4">
            {links.map((link) => (
                <Link key={link.title} href={link.link} target="_blank" rel="noopener noreferrer">
                {link.title}
                </Link>
            ))}
        </div>
    );
}