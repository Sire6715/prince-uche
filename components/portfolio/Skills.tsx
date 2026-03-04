'use client';

import { SkillProps } from "@/interfaces";
import { cloneElement } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 350,
      damping: 15,
    },
  },
};

const Skills = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <motion.ul
      className="flex flex-wrap mt-8 w-full gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill) => (
        <motion.li
          key={skill.label}
          className="flex gap-2 items-center cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.12, transition: { type: "spring", stiffness: 400, damping: 12 } }}
          whileTap={{ scale: 0.95 }}
        >
          {cloneElement(
            skill.icon as React.ReactElement<{ size?: number; color?: string }>,
            { size: 24, color: skill.color }
          )}
          <span className="text-[10px] lg:text-[17px]">{skill.label}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Skills;