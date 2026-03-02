import Image from "next/image";
import SectionBlock from "@/components/common/SectionBlock";
import {
  ArrowChevron,
  ArrowFlow,
  ArrowLoop,
  ArrowSweepUp,
} from "@/components/common/Arrows";
import IconLabel from "@/components/common/IconLabel";
import { CONTACTS } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-sans bg-background text-foreground">
      <div className="w-[45%]">
        <SectionBlock
          title={"Hey, I'm <span class='text-warning'>Prince Uche! </span>"}
          title_style="text-5xl bg-background text-foreground font-bold"
          body_style="text-[18px]  text-foreground"
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          }
        />
        <div>
          <ArrowChevron size={48} className="text-warning" />
        </div>
        <div className="flex flex-col items-start  pr-6">
          <h1 className="font-bold my-6">Find me on</h1>
          <IconLabel contacts={CONTACTS} />
        </div>
        <div className="flex flex-col relative mt-10 items-start  pr-6">
          <h1 className="font-bold">Contact</h1>
          <p className="my-4">
            You can reach my anytime on
            <Link href={"mailto:uchepibe@gmail.com"}>
              <span className="font-bold text-foreground decoration-warning decoration-2 hover:text-primary underline">
                {" "}
                uchepibe@gmail.com
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
