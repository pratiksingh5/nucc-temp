import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import GlobalModal from "@/components/common/Modals/GlobalModal";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import ProfilePageFormModal from "@/components/profile/ProfilePageFormModal";
import useProfileStore from "@/stores/ProfileStore";
import ProfileForm from "@/components/profile/ProfileForm";
import { ProfilePageSchema } from "@/validation/schemas/ProfileSchema";

type Props = {};

const ProfileContents = [
  {
    name: "Profile",
  },
  {
    name: "Address",
  },
  {
    name: "Educational Details",
  },
  {
    name: "Projects",
  },
  {
    name: "Resume",
  },
  {
    name: "Certificate",
  },
];

const ProfilePage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const profileStore = useProfileStore();
  return (
    <div className="bg-[#F4F4F4] w-full h-screen">
      <Navbar />
      <section className="lg:px-[135px] md:px-5 xs:px-5 flex pt-20 w-full h-full">
        <SideBar />
        {open ? <ProfilePageFormModal {...{ open, setOpen, type }} /> : <></>}
        <div className="w-full h-full py-12 flex flex-col justify-between">
          <button className="flex items-center justify-between w-full md:hidden bg-white rounded-2xl font-regular text-gray-400 p-5 active:text-black">
            <div className="flex items-center">
              <FiUser fontSize={20} />
              <span className="ml-3 text-md">My Profile</span>
            </div>
            <IoIosArrowDown fontSize={20} />
          </button>
          <div className=" md:h-[35%] xs:h-2/5 bg-[#EDEDED] rounded-2xl">
            <div className="h-[60%] bg-transparent"></div>

            <div className="h-[40%] bg-white rounded-b-2xl px-6 flex items-center justify-between relative">
              <div className=" absolute cursor-pointer md:bottom-[60%] xs:bottom-[60%] md:w-16 md:h-16 xs:w-16 xs:h-16 m-6 rounded-full flex justify-center items-center bg-[#D6D6D6]">
                <FaUser fontSize={25} />
              </div>
              <div>
                <h5 className="text-2xl font-medium">Your Name</h5>
                <p className="text-md">Position</p>
              </div>
              <MdEdit fontSize={25} cursor={"pointer"} />
            </div>
          </div>
          <div className=" md:h-[60%] xs:h-2/5 bg-white rounded-2xl px-6 overflow-auto scrollbar-hide">
            {ProfileContents.map((content) => {
              return (
                <>
                  <div
                    className=" h-[14.7%] my-2 border-b-2 flex items-center justify-between"
                    key={content.name}
                  >
                    <p className=" text-xl font-medium text-gray-600">
                      {content.name}
                    </p>
                    <MdEdit
                      fontSize={20}
                      cursor={"pointer"}
                      onClick={() => {
                        setType(content.name);
                        setOpen(true);
                      }}
                    />
                  </div>
                  {profileStore?.[content.name] ? (
                    <ProfileForm
                      described={ProfilePageSchema[content.name]?.describe()}
                      formValues={profileStore?.[content.name]}
                      readOnly={true}
                    />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
