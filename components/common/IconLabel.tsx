import { IconLabelProps } from "@/interfaces";
import Link from "next/link";

const IconLabel = ({ contacts }: { contacts: IconLabelProps[] }) => {
  return (
    <ul className="flex gap-2">
      {contacts.map((c) => (
        <li key={c.label}>
          <Link href={c.link} className="flex gap-2 items-middle font-medium">
            {c.icon}
            <span>{c.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconLabel;