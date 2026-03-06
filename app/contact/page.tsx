"use client";
import Link from "next/link";
import IconLabel from "@/components/common/IconLabel";
import {Highlight} from "../page";
import { CONTACTS } from "@/constants";

function WavyLine() {
  return (
    <svg
      className="my-10 text-warning"
      width="150"
      height="15"
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,6 C10,1 20,11 30,6 C40,1 50,11 60,6 C70,1 80,11 90,6 C100,1 110,11 120,6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-0 lg:px-0">
        <div className="lg:w-[45%] max-w-full w-full">
          <h1 className="text-8xl lg:text-[10rem] font-bold mb-3">Get in touch</h1>
          <p className="text-base lg:text-lg opacity-70">
            Have an exciting project or opportunity? Let&apos;s talk!
          </p>

          <WavyLine />

          <div className="space-y-2 text-sm lg:text-base opacity-80 leading-relaxed">
            <p>
              You can reach me anytime at{" "}
              <Link href="mailto:uchepibe@gmail.com">
                <Highlight> uchepibe@gmail.com </Highlight>
              </Link>
            </p>
            <p>
              As a backup option, you can{" "}
              <Link href="https://linkedin.com"> <Highlight>DM me on LinkedIn </Highlight></Link>
            </p>
          </div>

          <p className="mt-6 text-sm opacity-50">
            I usually respond right away on business days.
          </p>

          <div className="mt-10">
            <IconLabel contacts={CONTACTS} />
          </div>
        </div>
      </main>
    </div>
  );
}
