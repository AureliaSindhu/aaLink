"use client";
import Header from "@/components/header";
import LinkSec from "@/components/linkSec"; 
import SearchBar from "@/components/searchBar";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bgGray)] text-white flex flex-col items-center">
      <Header />
      <SearchBar />
      <LinkSec />
      <Footer />
    </div>
  );
}