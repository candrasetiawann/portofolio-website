import Image from "next/image";
import { useTheme } from "../Buttons/ThemeContext";
import hamberger from "../../assets/img/menu/menu-yellow.svg";
import hamberger2 from "../../assets/img/menu/menu-indigo.svg";

type ToggleModalProps = {
  toggleModal: () => void;
};

const NavModalButton = ({ toggleModal }: ToggleModalProps) => {
  const {theme} = useTheme() ?? {}
  const getIcon = () => {
    return theme === 'dark' ? hamberger : hamberger2
  }

  return (
    <div className="md:hidden flex items-center">
      {/* button modal */}
      <button
        className="bg-slate-200 dark:bg-bgdark3 rounded-md"
        onClick={toggleModal}
      >
        <Image src={getIcon()} alt="menu icon" width={40} height={40} />
      </button>
    </div>
  );
};

export default NavModalButton;
