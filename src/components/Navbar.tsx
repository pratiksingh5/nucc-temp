import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className=" fixed w-full h-20 lg:px-[135px] md:px-5 sm:px-5 bg-white">
      <nav className="md:flex items-center justify-between h-full w-full sm:hidden">
        <Link href="/">
          <Image src="/Logo.jpeg" width={200} height={100} alt="logo" />
        </Link>
        <div className="flex gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <Link className=" text-gray-600 active:text-gray-950" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className=" text-gray-600 active:text-gray-950" href="/">
                Courses
              </Link>
            </li>
            <li>
              <Link className=" text-gray-600 active:text-gray-950" href="/">
                Assessments
              </Link>
            </li>
            <li>
              <Link className=" text-gray-600 active:text-gray-950" href="/">
                Jobs
              </Link>
            </li>
          </ul>
          <div className="flex shadow-md cursor-pointer items-center justify-center h-10 w-10 rounded-full object-cover">
            <FaUser color="gray" height={100} />
          </div>
        </div>
      </nav>
      <nav className="md:hidden flex items-center justify-between h-full w-full">
        <Link href="/">
          <Image src="/Logo.jpeg" width={160} height={80} alt="logo" />
        </Link>
        <div className=" flex items-center gap-5 font-bold text-gray-600">
          <RiSearch2Line fontSize={20} className=" active:text-black" />
          <RiMenuFill fontSize={25} className=" active:text-black" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
