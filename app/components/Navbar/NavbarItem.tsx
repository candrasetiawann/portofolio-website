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
            ? "text-blue-500"
            : "text-neutral-700 dark:text-white"
        }  hover:text-blue-500 dark:hover:text-blue-500`}
        href={content.target}
      >
        {content.title}
      </Link>
    </li>
  );
};

export default NavbarItem;
