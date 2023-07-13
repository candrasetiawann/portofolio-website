import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import darkIcon from "../../assets/img/dark.png";
import lightIcon from "../../assets/img/light.png";
import Image from "next/image";

const ThemeSwitcherButton = () => {
  const { theme, toggleTheme } = useTheme() ?? {};
  const getIcon = () => {
    return theme === "dark" ? darkIcon : lightIcon;
  };

  return (
    <div className="flex items-center">
      {/* <label className="relative flex justify-between items-center group p-2 text-xl">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span className=" w-12 h-6 flex items-center flex-shrink-0 ml-3 p-1 bg-blue-600 rounded-full duration-100 ease-in-out peer-checked:bg-gray-600 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 "></span>
      </label> */}
      <button onClick={toggleTheme}>
        <Image
          className="bg-slate-500 dark:bg-slate-700 px-2 py-2 rounded-md"
          src={getIcon()}
          alt={theme == "dark" ? "dark mode" : "light mode"}
          height={40}
          width={40}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcherButton;
