import DownloadResumeButton from "../components/Home/DownloadResumeButton";
import Image from "next/image";
import profilePic from "@/app/assets/img/candra.jpg";
import envelope from "../assets/img/contact/envelope.svg";
import github from "../assets/img/contact/github.svg";
import linkedin from "../assets/img/contact/social-linkedin.svg";

const iconContact = [
  {
    name: "envelope",
    src: envelope,
  },
  {
    name: "github",
    src: github,
  },
  {
    name: "linkedin",
    src: linkedin,
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
            <Image
              className=""
              key={icon.name}
              src={icon.src}
              alt="icon"
              width={30}
              height={30}
            />
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
