import Image from "next/image";
import profilePic from "@/app/assets/img/candra.jpg";
import envelope from "../assets/img/contact/envelope.svg";
import github from "../assets/img/contact/github.svg";
import linkedin from "../assets/img/contact/social-linkedin.svg";
import Link from "next/link";

const iconContact = [
  {
    name: "envelope",
    src: envelope,
    link: "mailto:candrasetiawan0630@gmail.com",
  },
  {
    name: "github",
    src: github,
    link: "https://github.com/candrasetiawann",
  },
  {
    name: "linkedin",
    src: linkedin,
    link: "https://github.com/candrasetiawann",
  },
];

const Home = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-x-10 h-[600px] md:h-screen ">
      <div className=" flex flex-col justify-start order-2 px-8 space-y-2 mt-10">
        <h1 className="font-black text-4xl text-slate-700 dark:text-amber-500 ">
          Hello :)
        </h1>
        <p className="pb-4 text-neutral-700 dark:text-sky-600 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          I'm <span className="text-amber-500">Candra</span> 👋🏼, welcome to my
          portfolio website.
        </p>
        <div className="flex flex-row gap-x-6">
          {/* <DownloadResumeButton /> */}
          {iconContact?.map((icon: any) => (
            <Link key={icon.name} href={icon.link}>
              <Image
                className=""
                src={icon.src}
                alt="icon"
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="order-1">
        <Image
          className=" rounded-tr-3xl rounded-bl-3xl shadow-lg"
          alt="Profile Picture"
          src={profilePic}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Home;
