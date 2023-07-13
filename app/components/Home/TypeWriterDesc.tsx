"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterDesc = () => {
  return (
    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
      <Typewriter
        words={["Front End Developer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h3>
  );
};

export default TypeWriterDesc;
