export default function Footer() {
    return (
        <footer className="w-full py-2 text-center text-sm text-neutral-500 fixed bottom-0">
            <p>
                &copy; {new Date().getFullYear()} made by {" "}
                <a href="https://www.instagram.com/aacodee/?hl=en" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-blue-400">
                    aacode
                </a>
            </p>
        </footer>
    );
}