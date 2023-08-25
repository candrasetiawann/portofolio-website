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
                ? "text-indigo-600 dark:text-textgray"
                : "text-neutral-700 dark:text-textgray"
            }  hover:text-indigo-600 dark:hover:text-indigo-600`}
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
