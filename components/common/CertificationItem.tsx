"use client";

import { motion } from "framer-motion";

export interface CertificationProps {
  label: string;
  issuer: string;
  period: string;
  link: string;
  description: string;
  delay?: number;
  isLast?: boolean
}

export default function CertificationItem({
  label,
  issuer,
  period,
  link,
  description,
  delay = 0,
  isLast=false
}: CertificationProps) {
  return (
    <div className={`relative pl-13 lg:pl-25 ${isLast ? "pb-0" : "pb-14" } mb-0`}>
      {!isLast && (
    <div className="absolute left-2.25 top-5 bottom-0 w-0.5 bg-foreground-muted" />
  )}
      <span className="absolute left-0 top-1.5 z-10 flex h-5 w-5 items-center cursor-pointer justify-center bg-primary hover:bg-primary-hover rounded-full  ring-4 ring-foreground-muted shadow-[0_0_0_2px_#c850c0] border-2 border-white" />

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
        <h3 className="text-xl lg:text-3xl font-semibold tracking-tight">
          {label}
        </h3>

        <p className="mt-1 text-foreground-muted text-sm lg:text-2xl font-mono">
          {issuer} {isLast ? period : ""}
        </p>

        <p className="mt-2 text-sm lg:text-xl leading-relaxed text-foreground max-w-xl">
          {description}
        </p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`
            rounded-md bg-primary hover:bg-primary-hover
            px-15 lg:px-30 py-2 lg:py-4 text-[15px] lg:text-[20px]
             text-white
            transition-all
            hover:opacity-90 hover:scale-[1.03]
            active:scale-95
            self-center
            ${isLast ? "hidden" : "inline-block mt-20 mb-2"}
          `}
        >
          View Certificate
        </a>
      </motion.div>
    </div>
  );
}