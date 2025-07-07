"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { searchLinks, LinkItem } from "./linkUtils";

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<LinkItem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(true);
                setTimeout(() => inputRef.current?.focus(), 0);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
                setQuery("");
                setResults([]);
                inputRef.current?.blur();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (query.trim()) {
            setResults(searchLinks(query.trim()));
        } else {
            setResults(searchLinks(""));
        }
    }, [query]);

    const onTriggerClick = () => {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    if (!isOpen) {
        return (
        <div className="flex items-center justify-center w-1/4 relative py-8">
            <button
                onClick={onTriggerClick}
                className="w-full p-2 rounded-md bg-white/10 text-center backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
                <Search size={16} className=""/>
                <span className="text-sm text-gray-300">Search Aacode Library</span>
                <span className="text-xs text-gray-400 ml-auto">
                    {navigator.platform.includes("Mac") ? "⌘K" : "Ctrl+K"}
                </span>
            </button>
        </div>
        );
    }

    return (
        <>
        {isOpen && (
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-all" />
        )}
        <div className="flex items-center justify-center w-1/4 relative py-8 z-50">
            <div className="w-full relative">
            <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    placeholder="Search Aacode Library"
                    onChange={onInputChange}
                    className="w-full px-8 py-2 rounded-md bg-white/10 text-center backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-300" />
                </div> */}

                <div className="text-center mt-2">
                    <p>
                    press{" "}
                    <span className="text-xs text-gray-300 bg-gray-500/20 px-2 py-1 rounded">
                        ESC
                    </span>{" "}
                    to cancel
                    </p>
                </div>

                {results.length > 0 && (
                    <ul className="absolute z-10 mt-1 w-full overflow-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-md">
                    {results.map((item) => (
                        <li key={item.id}>
                        <a
                            href={item.link}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-white/20 transition-colors"
                            onClick={() => {
                            setIsOpen(false);
                            setQuery("");
                            setResults([]);
                            }}
                        >
                            <Image src={item.thumbnail} width={20} height={20} alt={item.title} className="text-gray-300" />
                            <span className="text-sm">{item.title}</span>
                        </a>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    );
}
