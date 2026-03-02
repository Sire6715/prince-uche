import { SectionBlockProps } from "@/interfaces";

const SectionBlock = ({ title, body }: SectionBlockProps) => {
  return (
    <section className="flex leading-8 items-start flex-col align-middle gap-4">
      <h1  dangerouslySetInnerHTML={{ __html: title }} className="text-5xl bg-background text-foreground font-bold"/>
      <p  className="text-[18px]  text-foreground">{body}</p>
    </section>
  );
};

export default SectionBlock;
