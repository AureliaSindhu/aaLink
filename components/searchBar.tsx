import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex items-center justify-center w-1/4 relative py-8">
            <input 
                type="text" 
                placeholder="Search Aacode Library"
                className="w-full p-2 rounded-md bg-white/10 text-center backdrop-blur-xl border border-white/20"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
        </div>
    );
}