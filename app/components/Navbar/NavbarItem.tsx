import Link from "next/link";
import { NavbarItemType } from "./Navbar";

type Props = {
  content: NavbarItemType;
  pathname: string;
};

const NavbarItem = ({ content, pathname }: Props) => {
  return (
    <li>
      <Link
        className={`font-bold ${
          pathname === content.target
            ? "text-sky-600 dark:text-amber-500"
            : "text-neutral-700 dark:text-textgray"
        }  hover:text-sky-600 dark:hover:text-amber-500`}
        href={content.target}
      >
        {content.title}
      </Link>
    </li>
  );
};

export default NavbarItem;
