import Link from "next/link";
import Image from "next/image";
import { links } from "./links";

export default function LinkSec() {
    const categories = [...new Set(links.map(link => link.category))];

    return (
        <div className="grid grid-cols-2 gap-8 p-8">
            {categories.map(categoryName => (
                <div className="flex flex-col gap-4 text-center">
                    <div className="bg-white/5 rounded-2xl p-2">
                        <div className="grid grid-cols-2 gap-4">
                            {links
                                .filter(link => link.category === categoryName)
                                .map(link => (
                                    <Link 
                                        key={link.thumbnail} 
                                        href={link.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <div className="flex flex-col items-center">
                                            <Image 
                                                src={link.thumbnail} 
                                                height={48} 
                                                width={48} 
                                                alt={link.title}
                                                className="rounded-lg"
                                            />
                                            {/* <span className="text-sm text-white/60">{link.title}</span> */}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <p className="text-md text-white/80">{categoryName}</p>
                </div>
            ))}
        </div>
    );
}