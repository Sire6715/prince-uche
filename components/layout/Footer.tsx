import Link from "next/link";
import ThemeToggle from "../portfolio/ThemeToggle";

const Footer = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4">
      <footer
        className="flex justify-between items-center px-6 lg:px-10 py-3 rounded-2xl w-full max-w-5xl "
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.18), 0 1px 0 rgba(255,255,255,0.12) inset",
        }}
      >
        <p className="hidden lg:block text-sm font-semibold text-foreground/80">
          &copy; {new Date().getFullYear()} Prince Uche&#8482;
        </p>

        <div className="flex gap-5 items-center">
          <Link
            href="/projects"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide"
          >
            PROJECTS
          </Link>

          <Link
            href="https://github.com/Sire6715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 8l0 8" />
              <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
              <path d="M14 7l3 -1" />
            </svg>
          </Link>
        </div>
        <div className="lg:hidden">
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
};

export default Footer;