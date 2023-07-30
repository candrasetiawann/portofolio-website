"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import codeblok from "../../assets/img/codeblok.svg";
import display from "../../assets/img/display.svg";

const projectsData = [
  {
    title: "candrasetiawan.vercel.app",
    desc: "Personal website built with Next.js, TypeScript, Tailwind CSS",
    tech: ["Next JS", "Typescript", "Tailwind CSS"],
    images: "porto",
    projectUrl: "https://github.com/candrasetiawann/portofolio-website",
    projectDemoUrl: "https://candrasetiawan.vercel.app/",
  },
  {
    title: "Pokemon Web App",
    desc: "A Pokemon list app allows view the Pokemon",
    tech: ["React JS", "Nextjs", "Tailwind css", "Tanstack Query"],
    images: "poke",
    projectUrl: "https://github.com/candrasetiawann/belajar-react-query",
    projectDemoUrl: "https://poke-react-query.vercel.app/",
  },
  {
    title: "Notecs",
    desc: "simple notes app built using nextjs",
    tech: ["Nextjs", "Auth.js", "Prisma", "TypeScript"],
    images: "notecs",
    projectUrl: "https://github.com/candrasetiawann/Notecs",
    projectDemoUrl: "https://notecs.vercel.app/",
  },
  {
    title: "Kalkulator",
    desc: "a simple calculator built using javascript",
    tech: ["Javascript"],
    images: "kalkulator",
    projectUrl: "https://github.com/candrasetiawann/kalkulator-sederhana",
    projectDemoUrl: "https://candrasetiawann.github.io/kalkulator-sederhana/",
  },
  {
    title: "Creative Digital Landing page",
    desc: "Landing Page built using bootstrap",
    tech: ["Bootstrap"],
    images: "creative",
    projectUrl:
      "https://github.com/candrasetiawann/creative-digital-landingpage",
    projectDemoUrl:
      "https://candrasetiawann.github.io/creative-digital-landingpage/",
  },
  {
    title: "Websiteku",
    desc: "Simple Landing built using bootstrap",
    tech: ["Bootstrap"],
    images: "webku",
    projectUrl: "https://github.com/candrasetiawann/webku-landing-page",
    projectDemoUrl: "https://candrasetiawann.github.io/webku-landing-page/",
  },
  {
    title: "Todoify",
    desc: "Simple Todo using react js local storage",
    tech: ["React JS", "Bootstrap"],
    images: "todoify",
    projectUrl: "https://github.com/candrasetiawann/todoreact",
    projectDemoUrl: "https://todofy-pink.vercel.app/",
  },
  {
    title: "quizkuis",
    desc: "Simple quiz game using ReactJs and Tailwind css",
    tech: ["React JS", "Nextjs", "Tailwind css"],
    images: "quiz",
    projectUrl: "https://github.com/candrasetiawann/QuizKuis",
    projectDemoUrl: "",
  },
];

const CardProjects = () => {
  const [isHoverred, setIsHovered] = useState("");

  const handleMouseEnter = (projectTitle: any) => {
    setIsHovered(projectTitle);
  };

  const handleMouseLeave = () => {
    setIsHovered("");
  };

  const getImagePath = (imageName: string) => {
    const project = projectsData.find(
      (project) => project.images === imageName
    );
    if (project) {
      return require(`../../assets/img/projects/${imageName}.png`);
    }
  };

  return (
    <div className="pt-6 grid grid-rows-2 gap-4 grid-cols-1 md:grid-cols-2 pb-8">
      {projectsData.map((projects) => (
        <ul
          className="border-2 border-slate-700 dark:border-sky-600 "
          onMouseEnter={() => handleMouseEnter(projects.title)}
          onMouseLeave={handleMouseLeave}
          key={projects.title}
        >
          <div
            className={`relative ${
              isHoverred === projects.title ? "filter blur-sm" : ""
            } transition-all duration-300`}
          >
            <Image
              className="w-full"
              alt={projects.title}
              src={getImagePath(projects.images)}
              width={340}
              height={200}
            />
          </div>
          {/* perbaikan */}
          <div className="py-4 pl-4 pr-4">
            <h1 className="font-bold text-neutral-700 dark:text-sky-600">
              {projects.title}
            </h1>
            <p className="text-neutral-700 dark:text-sky-600">
              {projects.desc}
            </p>
            <div className="flex flex-row flex-wrap">
              {projects.tech.map((techName) => (
                <div key={techName} className="mt-2">
                  <p className="text-neutral-700 bg-gray-300 border-2  py-1 px-2 mr-2 mb-1 ">
                    {techName}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-rows gap-2">
              <Link href={projects.projectUrl}>
                <Image
                  className="hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-white"
                  src={codeblok}
                  alt="icon code"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={projects.projectDemoUrl}>
                <Image
                  className="hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-white"
                  src={display}
                  alt="icon code"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          {/* perbaikan */}
        </ul>
      ))}
    </div>
  );
};

export default CardProjects;
