"use client";
import { usePathname } from "next/navigation";
import NavbarItem from "./NavbarItem";
import ThemeSwitcherButton from "../Buttons/ThemeSwitcherButton";
import NavModal from "./NavModal";
import NavModalButton from "./NavModalButton";
import { useState } from "react";

const contents = [
  { target: "/", title: "Home" },
  {
    target: "/blog",
    title: "articles",
  },
  // {
  //   target: "/Skills",
  //   title: "Skills",
  // },
  // {
  //   target: "/Projects",
  //   title: "Projects",
  // },
  // {
  //   target: "/Contact",
  //   title: "Contact",
  // },
];

export type NavbarItemType = (typeof contents)[number];

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const pathName = usePathname();
  return (
    <div className="overflow-x-hidden fixed top-0 left-0 z-50 w-full">
      <nav
        className={`relative bg-white dark:bg-bgdark2 border-b-2 border-gray dark:border-gray md:border-none`}
      >
        <div className=" flex flex-row justify-around items-center py-2 px-8 mx-auto">
          <ol className=" hidden md:flex gap-6">
            {contents.map((content) => {
              return (
                <NavbarItem
                  pathname={pathName}
                  content={content}
                  key={content.title}
                />
              );
            })}
          </ol>
          <div className="flex flex-row gap-x-2 ml-auto md:ml-0">
            <ThemeSwitcherButton />
            <NavModalButton toggleModal={toggleModal} />
          </div>
        </div>
      </nav>
      <div className=" mt-2 bg-white dark:bg-bgdark2 shadow-md w-2/5  rounded-md ml-auto mr-4">
        {contents.map((content) => (
          <NavModal
            key={content.title}
            pathname={pathName}
            content={content}
            modalOpen={isModalOpen}
          />
        ))}
      </div>
    </div>
  );
};
