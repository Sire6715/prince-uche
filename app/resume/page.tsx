import { ArrowChevron } from "@/components/common/Arrows";
import SectionBlock from "@/components/common/SectionBlock";
import IconLabel from "@/components/common/IconLabel";
import { CONTACTS, SKILLS } from "@/constants";
import Skills from "@/components/portfolio/Skills";
import Link from "next/link";
import Experience from "@/components/portfolio/Expereince";

export default function Resume() {
  return (
    <div className="flex p-6 lg:p-0 min-h-screen flex-col items-center justify-center font-sans bg-background text-foreground">
      <div className="max-w-full lg:w-[45%]">
        <SectionBlock
          title={"My Resume/CV"}
          title_style="text-xl lg:text-4xl bg-background text-foreground font-bold"
          body_style="text-[12px] leading-4 lg:leading-7 lg:text-xl  text-foreground"
          body={
            "Data-driven Front-End Developer and Analyst with 3+ years of experience leveraging Python, SQL, and modern JavaScript frameworks to solve complex business problems. Experienced in uncovering patterns, optimizing workflows, and building interactive dashboards and web applications that turn data into practical insights. Strong problem-solver with a passion for using analytics to support innovation and evidence-based decision-making."
          }
        />
        <div>
          <ArrowChevron size={60} className="text-warning" />
        </div>
        <div className="my-12">
          <SectionBlock
            title={"Skills"}
            title_style="text-xl lg:text-4xl bg-background text-foreground font-bold"
            body_style="text-[12px] lg:text-xl lg:leading-7 leading-4  text-foreground"
            body={
              "Here are the frameworks, libraries, services, and runtimes I'm experienced with. Note that this is not a complete list! I'm constantly gaining new skills, and hence it can be a little bit outdated."
            }
          />
          <div>
            <Skills skills={SKILLS} />
          </div>
        </div>

        <div className="my-20">
          <SectionBlock
            title={"Work History"}
            title_style="text-xl lg:text-3xl bg-background text-foreground font-bold"
            body_style="text-sm lg:text-xl   text-foreground"
            body={
              "Below is a summary of my past employment experience."
            }
          />
          <p className="text-sm lg:text-xl">
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
