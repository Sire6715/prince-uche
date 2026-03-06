"use client";
import Image from "next/image";
import SectionBlock from "@/components/common/SectionBlock";
import { ArrowChevron } from "@/components/common/Arrows";
import IconLabel from "@/components/common/IconLabel";
import { CONTACTS } from "@/constants";
import Link from "next/link";

// Pencil-stroke underline component using --primary color
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute left-0 -bottom-1 w-full overflow-visible pointer-events-none"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,3 C10,0.5 20,5.5 30,3 C40,0.5 50,5.5 60,3 C70,0.5 80,5.5 90,3 C95,1.5 98,4 100,3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-warning"
        />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <div className="px-5 lg:px-0  min-h-screen flex flex-col items-center justify-center font-sans bg-background text-foreground pt-16 pb-23">
      <div className="lg:w-[70%] max-w-full w-full">

        {/* Hero Section*/}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-12">
          <div className="flex-1">
            <SectionBlock
              title={"Hey, I'm <span class='text-warning'>Prince Uche!</span>"}
              title_style="text-4xl lg:text-5xl opacity-80 bg-background text-foreground font-bold"
              body_style="text-sm lg:text-lg opacity-80 text-foreground mt-3"
              body={
                "I find patterns in behavioral data and turn them into product decisions. I also build the interfaces that put those insights to work. The common thread is making things clearer—datasets, recommendations, or code."
              }
            />
            <div className="mt-6">
              <ArrowChevron size={48} className="text-warning" />
            </div>
          </div>


          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-52 h-52 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-2 ring-primary/30 shadow-xl">
              <Image
                src="/assets/images/profile/Prince.jpg"
                alt="Prince Uche"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="backdrop-blur-sm bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-6 lg:p-10 mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold opacity-80 mb-6"><Highlight>About me</Highlight></h2>
          <div className="space-y-4 text-sm lg:text-lg opacity-80 text-foreground leading-relaxed">
            <p>
              Hi, I&apos;m Prince, an analyst and a developer driven by a curiosity to
              understand how things work and a genuine desire to build solutions
              that are both meaningful and impactful. My path into tech started
              with a <Highlight>Degree in Mathematics from the Federal University of
              Technology, Owerri</Highlight>, which gave me a strong foundation in{" "}
              <Highlight>statistical thinking</Highlight> and{" "}
              <Highlight>quantitative analysis</Highlight>. Turns out, spending
              years solving equations is actually great preparation for staring
              down a dataset at midnight.
            </p>
            <p>
              I spend most of my time working with data, building{" "}
              <Highlight>dashboards</Highlight>, contributing to{" "}
              <Highlight>churn prediction models</Highlight>, and turning
              behavioral and engagement data into insights that shape real product
              decisions. My toolkit includes{" "}
              <Highlight>Python, SQL, Pandas, Excel, and Power BI</Highlight>, and
              I&apos;m most in my element when there&apos;s a messy dataset and an
              interesting question attached to it.
            </p>
            <p>
              On the development side, I build clean, responsive interfaces using{" "}
              <Highlight>React, Next.js, TypeScript, and Tailwind CSS</Highlight>.
              That combination of analytical thinking and frontend experience means
              I can bridge the gap between data and the people who need to use it.
              I care about the full journey from raw data to clear recommendation,
              and about how software is built along the way. Clean code and clear
              insights — both are a personality trait at this point.
            </p>
            <p>
              Outside of work, I&apos;m always picking up new tools and exploring new
              ideas. The field moves fast, and honestly, keeping up with it is half
              the fun.
            </p>
          </div>
        </div>

        {/* Find me on */}
        <div className="flex flex-col items-start pr-6 mb-8">
          <h2 className="font-bold mb-2">Find me on</h2>
          <IconLabel contacts={CONTACTS} />
        </div>

        {/* Contact */}
        <div className="flex flex-col relative items-start pr-6">
          <h2 className="font-bold">Contact</h2>
          <p className="my-4">
            You can reach me anytime on{" "}
            <Link href={"mailto:uchepibe@gmail.com"}>
              <Highlight>
                uchepibe@gmail.com
              </Highlight>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}