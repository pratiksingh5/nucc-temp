import React from "react";
import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import CourseSideBar from "@/components/CourseSidebar";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import AdminTable from "@/components/tables/AdminTable";
import { BsSearch } from "react-icons/bs";

const stats = [
  {
    id: 1,
    name: "No. of Student  who have logged in at least once",
    value: "4567",
  },
  {
    id: 2,
    name: "No. of Student  who have logged in at least once",
    value: "4567",
  },
  {
    id: 3,
    name: "No. of Student  who have logged in at least once",
    value: "4567",
  },
  {
    id: 4,
    name: "No. of Student  who have logged in at least once",
    value: "4567",
  },
];

function classNameNames(...classNamees: any) {
  return classNamees.filter(Boolean).join(" ");
}

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <section className="lg:p-[135px] xs:py-[135px] xs:px-5 flex pt-20 w-full h-screen overflow-auto bg-[#F4F4F4]">
        <div className="w-full h-full flex justify-center">
          <div className="md:w-1/4 bg-white mr-10 rounded-2xl px-4 hidden md:flex overflow-hidden ">
            <CourseSideBar />
          </div>
          <div className="w-full bg-[F4F4F4] rounded-2xl">
            <section className="text-gray-600 body-font h-full">
              <div className="p-0">
                <div className="mx-auto">
                  <dl className="xs:grid xs:grid-cols-1 sm:grid-cols-2 gap-8 text-center md:grid-cols-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className=" flex flex-col items-center justify-center gap-y-4 p-4 min-h-[10rem] rounded-2xl bg-gradient-to-r from-[#49D9EF] to-[#4256D0]"
                      >
                        <dt className="text-base leading-6 text-gray-50 md:text-sm sm:text-md xs:text-lg">
                          {stat.name}
                        </dt>
                        <dd className="order-first md:text-4xl font-semibold tracking-tight text-white xs:text-5xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="admin-table bg-white rounded-2xl w-full mt-10">
                <h1 className="text-2xl font-medium text-gray-800 px-8 pt-8">
                  List of Students
                </h1>
                <div className="mt-6 px-8">
                  <div className="flex items-center rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 mb-10 w-full">
                    <BsSearch
                      color="#4256D0"
                      fontWeight={900}
                      className="ml-5 w-5 h-5"
                    />
                    <input
                      type="text"
                      name="username"
                      className="border-0 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 xs:text-sm xs:leading-6 p-3 w-full"
                      placeholder="Search by name, enrollment no, batch"
                    />
                  </div>
                </div>
                <AdminTable />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
