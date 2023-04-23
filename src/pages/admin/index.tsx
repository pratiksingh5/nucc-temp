import React from "react";
import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import CourseSideBar from "@/components/CouseSidebar";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import AdminTable from "@/components/tables/AdminTable";

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
      <section className="px-[8%] pt-20 w-full h-full">
        <div className="w-full flex justify-center">
          <div className="md:w-1/4 bg-[#F4F4F4] mr-10 rounded-2xl px-4 hidden md:flex overflow-hidden ">
            <CourseSideBar />
          </div>
          <div className="w-full  bg-[#F4F4F4]">
            <section className="text-gray-600 body-font">
              <div className="py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 ">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="mx-auto flex max-w-xs flex-col gap-y-4 py-4 px-4 rounded-2xl bg-white"
                      >
                        <dt className="text-base leading-6 text-gray-600">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 xs:text-5xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="admin-table bg-white rounded-1xl w-full">
                <h1 className="text-3xl font-semibold">List of Students</h1>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 xs:max-w-md my-6 w-full">
                    <input
                      type="text"
                      name="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 xs:text-sm xs:leading-6 px-6 w-full"
                      placeholder="janesmith"
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
