import { SkillProps } from "@/interfaces";
import { cloneElement } from "react";

const Skills = ({ skills }: { skills: SkillProps[] }) => {

  return (
    <ul className="flex flex-wrap mt-8 w-full gap-5">
      {skills.map((skill) => (
        <li className="flex gap-2 items-center" key={skill.label}>
          {cloneElement(
            skill.icon as React.ReactElement<{ size?: number; color?: string }>,
            {
              size: 24,
              color: skill.color,
            },
          )}
          <span className="text-[10px] lg:text-[17px]">{skill.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
