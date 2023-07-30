import Image from "next/image";
import hamberger from "../../assets/img/hamberger.svg";

type ToggleModalProps = {
  toggleModal: () => void;
};

const NavModalButton = ({ toggleModal }: ToggleModalProps) => {
  return (
    <div className="md:hidden flex items-center">
      {/* button modal */}
      <button
        className="bg-slate-500 dark:bg-slate-500 rounded-md"
        onClick={toggleModal}
      >
        <Image src={hamberger} alt="menu icon" width={40} height={40} />
      </button>
    </div>
  );
};

export default NavModalButton;
