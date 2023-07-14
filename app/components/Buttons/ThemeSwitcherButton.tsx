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
      <button onClick={toggleTheme}>
        <Image
          className="bg-slate-500 dark:bg-amber-500 px-2 py-2 rounded-md"
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
