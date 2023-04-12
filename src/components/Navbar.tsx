import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className=" fixed w-full h-20 lg:px-[135px] bg-white">
      <nav className="flex items-center justify-between h-full w-full">
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
    </header>
  );
};

export default Navbar;
