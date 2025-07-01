"use client";
import LinkSec from "@/components/linkSec"; 
import SearchBar from "@/components/searchBar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bgGray)] text-white flex flex-col items-center">
      <section className="flex flex-col items-center justify-center gap-4 mt-16">
        <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-4 py-2 rounded-full">
          <h2 className="text-2xl text-[var(--blue)] font-bold">aacode</h2>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
        </div>
      </section>

      <SearchBar />

      <section className="flex-1 flex flex-col items-center justify-center w-full">
        <LinkSec />
      </section>

      <footer className="w-full py-2 text-center text-sm text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} made with several cups of americano,
          love by{" "}
          <a
            href="https://www.instagram.com/aacodee/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline text-blue-400"
          >
            aacode
          </a>
        </p>
      </footer>
    </div>
  );
}