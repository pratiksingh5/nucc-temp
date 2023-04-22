import React, {useState} from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoFolderOpenOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineAssignment,
  MdOutlineScreenSearchDesktop,
  MdOutlineLogout,
} from "react-icons/md";

const SideBar = () => {
  const [activeAccordion, setActiveAccordion] = useState('');
  const [activeButton, setActiveButton] = useState("");

  const handleAccordionClick = (accordionName:string) => {
    setActiveAccordion(activeAccordion === accordionName ? '' : accordionName);
  };
  const handleButtonClick = (buttonName:string) => {
    setActiveButton(buttonName);
  };

  return (
    <aside className=" w-1/4 h-full items-center lg:flex md:flex sm:hidden">
      <div className=" w-11/12 h-[90%] py-3 rounded-2xl bg-white flex flex-col items-center justify-between">
        <div className="flex flex-col w-full h-full items-center">
          <button className="flex items-center justify-between h-10 rounded-lg font-regular text-gray-400 w-5/6 active:text-black">
            <div className="flex items-center">
              <RxDashboard fontSize={20} />
              <span className="ml-3 text-md ">Dashboard</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          <button
            onClick={() => handleAccordionClick('profile')}
            className="flex items-center justify-between h-10 rounded-lg font-regular text-gray-400 w-5/6 active:text-black"
          >
            <div className="flex items-center">
              <FiUser fontSize={20} />
              <span className="ml-3 text-md ">Profile</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          {activeAccordion === 'profile' && (
            <div className="w-full flex flex-col mt-2">
              <button className={`h-10 rounded-lg font-regular text-gray-400 w-full active:text-black flex justify-start items-center px-10 ${activeButton === "about" && "bg-red-300"}`} onClick={(e)=> handleButtonClick("about")}>
                <span className="ml-3 text-md text-left">About</span>
              </button>
              <button className="h-10 rounded-lg font-regular text-gray-400 w-full active:text-black flex justify-start items-center px-10">
                <span className="ml-3 text-md ">Education</span>
              </button>
              <button className="h-10 rounded-lg font-regular text-gray-400 w-full active:text-black flex justify-start items-center px-10">
                <span className="ml-3 text-md ">Project</span>
              </button>
            </div>
          )}
          <button className="flex items-center justify-between h-10 rounded-lg font-regular text-gray-400 w-5/6 active:text-black">
            <div className="flex items-center">
              <IoFolderOpenOutline fontSize={20} />
              <span className="ml-3 text-md ">My Courses</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          <button className="flex items-center justify-between h-10 rounded-lg font-regular text-gray-400 w-5/6 active:text-black">
            <div className="flex items-center">
              <MdOutlineAssignment fontSize={20} />
              <span className="ml-3 text-md ">My Assignments</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          <button className="flex items-center justify-between h-10 rounded-lg font-regular text-gray-400 w-5/6 active:text-black">
            <div className="flex items-center">
              <MdOutlineScreenSearchDesktop fontSize={20} />
              <span className="ml-3 text-md ">My job Status</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
        </div>
        <div className=" w-5/6 flex flex-col mb-14">
          <button className="flex items-center justify-between h-10 rounded-lg font-regular w-5/6 text-black">
            <div className="flex ml-3 items-center">
              <IoSettingsOutline fontSize={25} />
              <span className="ml-3 text-lg">Settings</span>
            </div>
          </button>
          <button className="flex items-center mt-5 justify-between h-10 rounded-lg font-regular w-5/6 text-black">
            <div className="flex ml-3 items-center">
              <MdOutlineLogout fontSize={25} />
              <span className="ml-3 text-lg">Logout</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
