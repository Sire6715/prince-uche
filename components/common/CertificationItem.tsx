"use client";

import { motion } from "framer-motion";

export interface CertificationProps {
  label: string;
  issuer: string;
  period: string;
  link: string;
  description: string;
  delay?: number;
}

export default function CertificationItem({
  label,
  issuer,
  period,
  link,
  description,
  delay = 0,
}: CertificationProps) {
  return (
    <div className="relative pl-25 pb-14 mb-0">
      <div className="absolute left-2.25 top-5 bottom-0 w-0.5 bg-foreground-muted" />
      <span className="absolute left-0 top-1.5 z-10 flex h-5 w-5 items-center cursor-pointer justify-center bg-primary hover:bg-primary-hover rounded-full bg-primary ring-4 ring-foreground-muted shadow-[0_0_0_2px_#c850c0] border-2 border-white" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 14 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
          delay: delay / 1000,
        }}
        className="will-change-transform"
      >
        <h3 className="text-3xl font-semibold tracking-tight">
          {label}
        </h3>

        <p className="mt-1 text-foreground-muted text-2xl text-foreground font-mono">
          {issuer} | {period}
        </p>

        <p className="mt-2 text-xl leading-relaxed text-foreground max-w-xl">
          {description}
        </p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            rounded-md bg-primary hover:bg-primary-hover
            px-30 py-4 text-[20px]
             text-white
            transition-all
            hover:opacity-90 hover:scale-[1.03]
            active:scale-95
            self-center
            my-10
          "
        >
          View Certificate
        </a>
      </motion.div>
    </div>
  );
}