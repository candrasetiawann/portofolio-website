"use client";
import { useState } from "react";
import Image from "next/image";

const skillCategories = [
  {
    id: 1,
    name: "Language",
    skills: [
      {
        name: "HTML",
        experience: "6 month of experience",
      },
      {
        name: "CSS",
        experience: "6 month of experience",
      },
      {
        name: "JavaScript",
        experience: "5 month of experience",
      },
      {
        name: "TypeScript",
        experience: "3 month of experience",
      },
    ],
    images: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    name: "Framework",
    skills: [
      {
        name: "Bootstrap",
        experience: "2 month of experience",
      },
      {
        name: "Tailwind",
        experience: "2 month of experience",
      },
      {
        name: "Next Js",
        experience: "2 month of experience",
      },
    ],
    images: ["Bootstrap", "Tailwind", "NextJS"],
  },
  {
    id: 3,
    name: "Library",
    skills: [
      {
        name: "React",
        experience: "2 month of experience",
      },
      {
        name: "Authjs",
        experience: "2 month of experience",
      },
      {
        name: "Prisma",
        experience: "1 month of experience",
      },
      {
        name: "Jotai",
        experience: "1 month of experience",
      },
    ],
    images: ["React", "Authjs", "Prisma", "Jotai"],
  },
];

const TabSkills = () => {
  const [currentTab, setCurrentTab] = useState(skillCategories[0]);

  const handleTabClick = (category: any) => {
    setCurrentTab(category);
  };

  const getImagePath = (skill: { name: string; experience: string }) => {
    const currentCategory = skillCategories.find((category) =>
      category.skills.some((item) => item.name === skill.name)
    );
    console.log("currentCategory : ", currentCategory);
    if (currentCategory) {
      const index = currentCategory.skills.findIndex(
        (item) => item.name === skill.name
      );
      const imagePath = currentCategory.images[index].toLocaleLowerCase();
      return require(`../../assets/img/skills/${imagePath}.png`);
    }
  };

  return (
    <div className="mt-6">
      <div className=" pb-1 ">
        {skillCategories.map((category) => (
          <button
            className="text-neutral-700 dark:text-textgray  dark:hover:text-amber-500 hover:text-sky-600 font-bold px-2 pb-1"
            key={category.id}
            onClick={() => handleTabClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className=" mt-5 grid gap-4 md:grid-cols-2 md:grid-rows-2">
        {currentTab.skills.map((skill) => {
          return (
            <ul
              key={skill.name}
              className="border-2 border-slate-500 dark:border-gray  px-8 py-[25px] flex items-center gap-x-4 "
            >
              <Image
                src={getImagePath(skill)}
                alt={skill.name}
                width={50}
                height={80}
              />
              <div>
                <p className="pt-5 font-bold text-neutral-700 dark:text-textgray">
                  {skill.name}
                </p>
                <p className="pt-5  text-neutral-700 dark:text-textgray">
                  {skill.experience}
                </p>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TabSkills;
