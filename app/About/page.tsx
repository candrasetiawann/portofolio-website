import Image from "next/image";
import Avatar from "@/app/assets/img/avatar.png";

const About = () => {
  return (
    <div className="md:h-[500px] flex flex-col px-8 md:px-0">
      <h1 className="text-neutral-700 font-bold text-3xl pt-16 dark:text-amber-500">
        About me
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-4 ">
        <p className="dark:text-sky-600">
          Hello, My name is{" "}
          <span className="dark:text-amber-500">Candra Setiawan</span> I was
          born in Purworejo on October 11, 2003 (19 years old). I’m a passionate
          Mainly focusing on building good looking, best performance
          Front-End.With a keen eye for design and a commitment to clean code, I
          strive to create engaging and user-friendly web experiences. From
          responsive layouts to interactive elements, I enjoy bringing ideas to
          life and delivering seamless functionality. If you have any questions
          or would like to collaborate, feel free to reach out. I’m excited to
          connect and contribute to innovative web projects!
        </p>
        <Image
          className="hidden"
          src={Avatar}
          alt="Avatar"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default About;
