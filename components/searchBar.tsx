"use client";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(true);
            }

            if (e.key === "Escape") {
                setIsOpen(false);
                setIsTyping(false);
                inputRef.current?.blur();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleTriggerClick = () => {
        setIsOpen(true);
    };

    const handleInputBlur = () => {
        if (!inputRef.current?.value) {
            setIsTyping(false);
        }
    };

    if (!isOpen) {
        return (
            <div className="flex items-center justify-center w-1/4 relative py-8">
                <button
                    onClick={handleTriggerClick}
                    className="w-full p-2 rounded-md bg-white/10 text-center backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                    <Search size={16} />
                    <span className="text-sm text-gray-300">Search Aacode Library</span>
                    <span className="text-xs text-gray-400 ml-auto">
                        {navigator.platform.includes("Mac") ? "⌘K" : "Ctrl+K"}
                    </span>
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center w-1/4 relative py-8">
            <div className="w-full relative">
                <input
                    ref={inputRef}
                    type="text"
                    className="w-full px-8 py-2 rounded-md bg-white/10 text-center backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        setIsTyping(e.target.value.length > 0);
                        console.log(e.target.value);
                    }}
                    onBlur={handleInputBlur}
                />
                {!isTyping && (
                    <div className="px-4 absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Search size={16} className="mr-2" />
                        <span className="text-sm text-gray-300">Search Aacode Library</span>
                        <span className="text-xs text-gray-400 ml-auto">
                            {navigator.platform.includes("Mac") ? "⌘K" : "Ctrl+K"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
