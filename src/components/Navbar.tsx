import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { RiSearch2Line, RiMenuFill, RiSuitcase2Line } from "react-icons/ri";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import logo from "../../public/Logo.png";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout, MdOutlineAssignment } from "react-icons/md";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <header className=" fixed w-full h-20 lg:px-[135px] md:px-5 sm:px-5 bg-white z-10">
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
          <Image src={logo} width={160} height={80} alt="logo" />
        </Link>
        <div className=" flex items-center gap-5 font-bold text-gray-600">
          <RiSearch2Line fontSize={20} className=" active:text-black" />
          <RiMenuFill
            onClick={handleNavToggle}
            fontSize={25}
            className=" active:text-black"
          />
        </div>
      </nav>
      <div
        className={
          navToggle
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            navToggle
              ? "fixed right-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] sm:py-4 sm:px-4 ease-in duration-500"
              : "fixed right-[-200%] top-0 sm:py-4 sm:px-4 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex w-full h-auto items-center justify-between">
              <Link href="/" onClick={() => setNavToggle(false)}>
                <Image src={logo} width={160} height={80} alt="/" />
              </Link>
              <div
                onClick={handleNavToggle}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose className="text-gray-600" size={20} />
              </div>
            </div>
          </div>
          <div className="py-10 flex flex-col justify-between min-h-[70vh]">
            <ul className=" uppercase flex flex-col justify-center gap-5 ">
              <Link href="/">
                <li
                  onClick={() => setNavToggle(false)}
                  className="py-4 text-sm active:bg-blue-500 active:text-white px-3 rounded-lg flex items-center"
                >
                  <AiOutlineHome fontSize={25} />
                  <span className="ml-3 text-lg ">home</span>
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setNavToggle(false)}
                  className="py-4 text-sm active:bg-blue-500 active:text-white px-3 rounded-lg flex items-center"
                >
                  <AiOutlineFolderOpen fontSize={25} />
                  <span className="ml-3 text-lg ">Courses</span>
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setNavToggle(false)}
                  className="py-4 text-sm active:bg-blue-500 active:text-white px-3 rounded-lg flex items-center"
                >
                  <MdOutlineAssignment fontSize={25} />
                  <span className="ml-3 text-lg ">Assessments</span>
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setNavToggle(false)}
                  className="py-4 text-sm active:bg-blue-500 active:text-white px-3 rounded-lg flex items-center"
                >
                  <RiSuitcase2Line fontSize={25} />
                  <span className="ml-3 text-lg ">Jobs</span>
                </li>
              </Link>
            </ul>

            <div className=" w-5/6 flex flex-col mb-14 gap-5">
              <button
                className="py-4 text-sm active:bg-blue-500 active:text-white rounded-lg uppercase flex items-center"
                onClick={() => setNavToggle(false)}
              >
                <div className="flex ml-3 items-center">
                  <IoSettingsOutline fontSize={25} />
                  <span className="ml-3 text-lg">Settings</span>
                </div>
              </button>
              <button
                className="py-4 text-sm active:bg-blue-500 active:text-white rounded-lg uppercase flex items-center"
                onClick={() => setNavToggle(false)}
              >
                <div className="flex ml-3 items-center">
                  <MdOutlineLogout fontSize={25} />
                  <span className="ml-3 text-lg">Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
