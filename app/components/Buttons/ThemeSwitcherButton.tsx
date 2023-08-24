import { useTheme } from "./ThemeContext";
import darkIcon from "../../assets/img/mode/darkmode.svg";
import lightIcon from "../../assets/img/mode/lightmode.svg";
import Image from "next/image";

const ThemeSwitcherButton = () => {
  const { theme, toggleTheme } = useTheme() ?? {};
  const getIcon = () => {
    return theme === "dark" ? darkIcon : lightIcon;
  };

  return (
    <div className="flex items-center">
      <button onClick={toggleTheme}>
        <Image
          className="bg-slate-200 dark:bg-dark px-2 py-2 rounded-md"
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
