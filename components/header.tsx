import { Link } from "lucide-react";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center gap-4 mt-16 px-4">
            <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-4 py-2 rounded-full">
                <h2 className="text-xl md:text-2xl text-[var(--blue)] font-bold">aaLink</h2>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
            </div>

            <p className="flex flex-row text-xs md:text-sm text-gray-500 text-center">
                {/* <Link className="pr-1" size={18} />  */}
                aaLink is a collection of links to my social media and fun projects
            </p>

        </header>
    );
}