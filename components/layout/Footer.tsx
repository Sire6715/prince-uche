import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground lg:px-12 lg:py-6 flex justify-between items-center border-t border-border px-4 py-4">
      <p className="text-sm font-semibold">
        &copy; {new Date().getFullYear()} Prince Uche&#8482;
      </p>

      <div className="flex gap-6 items-center">
        <Link href="/projects" className="text-sm font-semibold hover:primary-hover">
          PROJECTS
        </Link>

        <Link href="https://github.com/Sire6715" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-git-branch"
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
    </footer>
  );
};

export default Footer;