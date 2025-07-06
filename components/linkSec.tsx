import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "./links";
import { ChevronLeft } from "lucide-react";

export default function LinkSec() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const categories = Array.from(new Set(links.map((l) => l.category)));

    if (activeCategory) {
        const categoryLinks = links.filter((l) => l.category === activeCategory);

        return (
            <div className="p-8 max-w-5xl mx-auto">
                <button
                    className="flex items-center gap-2 mb-6 text-sm text-blue-400 "
                    onClick={() => setActiveCategory(null)}
                >
                    <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
                <div className="grid grid-cols-6 gap-6">
                {categoryLinks.map((link) => (
                    <Link
                    key={link.thumbnail}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-2 rounded-xl hover:bg-white/10 transition"
                    >
                    <Image
                        src={link.thumbnail}
                        width={48}
                        height={48}
                        alt={link.title}
                        className="rounded-lg"
                    />
                    <span className="mt-1 text-xs text-white/70">{link.title}</span>
                    </Link>
                ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-8 p-8">
        {categories.map((categoryName) => {
            const catLinks = links.filter((l) => l.category === categoryName);

            return (
            <div key={categoryName} className="text-center">
                <div
                    className="bg-white/5 rounded-2xl p-2 cursor-pointer"
                    onClick={() => setActiveCategory(categoryName)}
                >
                {catLinks.length <= 4 ? (
                    <div className="grid grid-cols-2 gap-4">
                    {catLinks.slice(0, 4).map((l) => (
                        <Link
                        key={l.thumbnail}
                        href={l.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1 rounded-lg hover:bg-white/10 transition"
                        >
                        <Image
                            src={l.thumbnail}
                            width={40}
                            height={40}
                            alt={l.title}
                            className="rounded-lg"
                        />
                        </Link>
                    ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                    {catLinks.slice(0, 3).map((l) => (
                        <Link
                        key={l.thumbnail}
                        href={l.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1 rounded-lg hover:bg-white/10 transition"
                        >
                        <Image
                            src={l.thumbnail}
                            width={40}
                            height={40}
                            alt={l.title}
                            className="rounded-lg"
                        />
                        </Link>
                    ))}

                    <div className="grid grid-cols-2 grid-rows-2 gap-1">
                        {catLinks.slice(3, 7).map((l) => (
                        <Link
                            key={l.thumbnail}
                            href={l.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-0.5 rounded-sm hover:bg-white/10 transition"
                        >
                            <Image
                            src={l.thumbnail}
                            width={18}
                            height={18}
                            alt={l.title}
                            className="rounded-sm"
                            />
                        </Link>
                        ))}
                    </div>
                    </div>
                )}
                </div>

                <p className="mt-2 text-sm text-white/80">{categoryName}</p>
            </div>
            );
        })}
        </div>
    );
}