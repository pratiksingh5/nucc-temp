import React from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="bg-[#F4F4F4] w-full h-screen">
      <Navbar />
      <section className="lg:px-[135px] md:px-5 sm:px-5 flex pt-20 w-full h-full">
        <SideBar />
        <div className="w-full h-full py-12 flex flex-col justify-between">
          <button className="flex items-center justify-between w-full md:hidden bg-white rounded-lg font-regular text-gray-400 p-5 active:text-black">
            <div className="flex items-center">
              <FiUser fontSize={20} />
              <span className="ml-3 text-md">My Profile</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          <div className=" md:h-[35%] sm:h-2/5 bg-[#EDEDED] rounded-2xl relative">
            <div className="h-[60%] bg-transparent"></div>
            <div className="h-[40%] bg-white rounded-b-2xl px-6 flex items-center justify-between ">
              <div>
                <h5 className="text-2xl font-medium">Your Name</h5>
                <p className="text-md">Position</p>
              </div>
              <MdEdit fontSize={25} cursor={"pointer"} />
            </div>
            <div className=" cursor-pointer absolute top-[40%] w-20 h-20 mx-6 rounded-full flex justify-center items-center bg-[#D6D6D6]">
              <FaUser fontSize={25} />
            </div>
          </div>
          <div className=" md:h-[60%] sm:h-2/5 bg-white rounded-2xl px-6 overflow-auto">
            <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">Profile</p>
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
            <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">Address</p>
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
            <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">
                Educational Details
              </p>
              <div className="flex items-center md:gap-7 sm:gap-2">
                <RiAddLine fontSize={30} cursor={"pointer"} />
                <MdEdit fontSize={20} cursor={"pointer"} />
              </div>
            </div>
            <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">Projects</p>
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
            <div className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">Resume</p>
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
            <div className=" h-[14.7%] my-2 flex items-center justify-between">
              <p className=" text-xl font-medium text-gray-600">Certificate</p>
              <MdEdit fontSize={20} cursor={"pointer"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
