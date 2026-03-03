"use client";

import { motion } from "framer-motion";

export interface TimelineItemProps {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  location: string;
  bullets: string[];
  delay?: number;
  isLast?: boolean;
}

export default function TimelineItem({
  role,
  company,
  companyHref = "#",
  period,
  location,
  bullets,
  delay = 0,
  isLast=false
}: TimelineItemProps) {
  return (
    <div className="relative pl-12 lg:pl-25 pb-14 min-h-2 ">
      {!isLast && (
    <div className="absolute left-2.25 top-5 bottom-0 w-0.5 bg-foreground-muted" />
  )}
      <span className="absolute left-0 top-1.5 z-10 flex h-5 w-5 items-center cursor-pointer justify-center bg-primary hover:bg-primary-hover rounded-full ring-4 ring-foreground-muted shadow-[0_0_0_2px_#c850c0] border-2 border-white" />
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.50,
          ease: "easeOut",
          delay: delay / 1000,
        }}
        className="will-change-transform motion-reduce:transition-none"
      >
        <h3 className="text-xl lg:text-3xl font-bold tracking-tight">
          {role}{" "}
          <a
            href={companyHref}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primary-hover transition-opacity hover:opacity-75"
          >
            @{company}
          </a>
        </h3>

        <p className="mb-3 mt-1 font-mono text-sm lg:text-2xl text-foreground-muted">
          {period} | {location}
        </p>

        <ul className="list-disc list-outside pl-4 space-y-2">
          {bullets.map((point, i) => (
            <li
              key={i}
              className="text-sm lg:text-xl leading-relaxed text-foreground"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}