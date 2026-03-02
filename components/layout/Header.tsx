"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggle from "../portfolio/ThemeToggle";

const Header = () => {
  return (
    <nav className="bg-background text-foreground px-12 py-6 flex justify-between align-middle">
      <div>
        <h1 className="font-black text-4xl m-0 p-0">UP</h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="mr-8">
          <ul className="flex gap-6">
            <li className="font-semibold primary hover:primary-hover">
              <Link href="/resume">RESUME</Link>
            </li>
            <li className="font-semibold primary hover:primary-hover">
              <Link href={"mailto:uchepibe@gmail.com"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <Link href={""}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Link>
        <Link href={"https://github.com/Sire6715"}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
