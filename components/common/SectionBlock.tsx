"use client"
import { SectionBlockProps } from "@/interfaces";
import { motion } from "framer-motion";

const SectionBlock = ({ title, body, title_style,body_style  }: SectionBlockProps) => {
  return (
    <motion.section initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.50,
          ease: "easeIn",
          delay: 2 / 1000,
        }} 
       className="will-change-transform motion-reduce:transition-none flex leading-8 items-start flex-col align-middle gap-4">
      <h1  dangerouslySetInnerHTML={{ __html: title }} className={title_style}/>
      <p  className={body_style}>{body}</p>
    </motion.section>
  );
};

export default SectionBlock;
