import { ArrowChevron } from "@/components/common/Arrows";
import SectionBlock from "@/components/common/SectionBlock";
import IconLabel from "@/components/common/IconLabel";
import { CONTACTS, SKILLS } from "@/constants";
import Skills from "@/components/portfolio/Skills";
import Link from "next/link";
import Experience from "@/components/portfolio/Expereince";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-background text-foreground">
      <div className="w-[45%]">
        <SectionBlock
          title={"My Resume/CV"}
          title_style="text-4xl bg-background text-foreground font-bold"
          body_style="text-xl  text-foreground"
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          }
        />
        <div>
          <ArrowChevron size={60} className="text-warning" />
        </div>
        <div className="my-12">
          <SectionBlock
            title={"Skills"}
            title_style="text-4xl bg-background text-foreground font-bold"
            body_style="text-xl  text-foreground"
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            }
          />
          <div>
            <Skills skills={SKILLS} />
          </div>
        </div>

        <div className="my-20">
          <SectionBlock
            title={"Work History"}
            title_style="text-3xl bg-background text-foreground font-bold"
            body_style="text-xl   text-foreground"
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            }
          />
          <p className="text-xl">
            If required you can{" "}
            <Link href={"mailto:uchepibe@gmail.com"}>
              <span className="font-bold text-foreground decoration-warning decoration-2 hover:text-primary underline">
                {" "}
                Download my resume here.
              </span>
            </Link>
          </p>
          <div className="min-h-screen">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
