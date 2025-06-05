export default function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bgGray)] text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl text-[var(--blue)] font-bold bg-[var(--lightBlue)] border-2 border-[var(--blue)] px-3 py-1 rounded-full">aacode</h2>
      <p className="text-lg">Aurelia's personal linktree</p>

      <footer className="mx-auto py-2 text-center text-sm text-neutral-500 mt-8">
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