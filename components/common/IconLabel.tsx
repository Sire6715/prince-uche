import { IconLabelProps } from "@/interfaces";
import Link from "next/link";

const IconLabel = ({ contacts }: { contacts: IconLabelProps[] }) => {
  return (
    <ul className="flex w-full gap-5">
      {contacts.map((c) => (
        <li key={c.label}>
          <Link href={c.link} className="flex gap-2 items-middle text-sm font-medium">
            {c.icon}
            <span className="hidden lg:block">{c.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconLabel;