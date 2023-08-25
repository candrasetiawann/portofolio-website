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
            ? "text-indigo-600 dark:text-indigo-600"
            : "text-neutral-700 dark:text-textgray"
        } hover:bg-slate-200 dark:hover:bg-bgdark3 px-3 py-2 rounded-md hover:text-indigo-600 dark:hover:text-indigo-600`}
        href={content.target}
      >
        {content.title}
      </Link>
    </li>
  );
};

export default NavbarItem;
