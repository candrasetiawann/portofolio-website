import Link from "next/link";
import { NavbarItemType } from "./Navbar";

type Props = {
  content: NavbarItemType;
  pathname: string;
  modalOpen: boolean;
};

const NavModal = ({ content, pathname, modalOpen }: Props) => {
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };
  return (
    <div className="md:hidden flex flex-col">
      {/* button modal */}
      {/* <button
        className=" bg-blue-400 dark:bg-slate-700 rounded-sm"
        onClick={toggleModal}
      >
        <Image src={hamberger} alt="menu icon" width={40} height={40} />
      </button> */}
      {/* modal */}
      {modalOpen && (
        <div className="pl-4 py-1 my-2">
          <Link
            className={` font-bold ${
              pathname === content.target
                ? "text-sky-600 dark:text-amber-500"
                : "text-neutral-700 dark:text-sky-600"
            }  hover:text-blue-500 dark:hover:text-amber-500`}
            href={content.target}
          >
            {content.title}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavModal;
