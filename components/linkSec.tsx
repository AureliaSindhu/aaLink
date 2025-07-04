import Link from "next/link";
import Image from "next/image";
import { links } from "./links";

export default function LinkSec() {
    const categories = [...new Set(links.map(link => link.category))];

    return (
        <div className="grid grid-cols-2 gap-8 p-8">
            {categories.map(categoryName => (
                <div key={categoryName} className="bg-white/5 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-white/80 mb-4">{categoryName}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {links
                            .filter(link => link.category === categoryName)
                            .map(link => (
                                <Link 
                                    key={link.thumbnail} 
                                    href={link.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <Image 
                                            src={link.thumbnail} 
                                            height={48} 
                                            width={48} 
                                            alt={link.title}
                                            className="rounded-lg"
                                        />
                                        <span className="text-sm text-white/60">{link.title}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}