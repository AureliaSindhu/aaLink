import Link from "next/link";
import Image from "next/image";
import { links } from "./links";

export default function LinkSec() {
    return (
        <div className="flex flex-col gap-4">
            {links.map((link) => (
                <Link key={link.thumbnail} href={link.link} target="_blank" rel="noopener noreferrer">
                <Image src={link.thumbnail} height={100} width={100} alt={link.title} className="rounded-md"/>
                {/* {link.title} */}
                </Link>
            ))}
        </div>
    );
}