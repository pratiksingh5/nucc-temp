import Course from "@/components/Course";
import homepageStyle from "../styles/homepage.module.css";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Courses = () => {
  return (
    <section className="px-20 mb-20">
      <h1 className="text-center font-semibold mb-16 text-5xl">
        Unlimited access to <span className="text-[#2DC7DF]">100+ Courses</span>
        .
      </h1>
      <div className=" flex flex-wrap mt-6 items-center justify-evenly gap-10">
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
      <div className="flex justify-center mt-14">
        <Link
          href="/"
          className="rounded-full flex gap-3 items-center justify-between bg-[#2DC7DF] px-6 py-3 text-md font-semibold text-white border-none outline-none"
        >
          View All Courses <MdArrowForward fontSize={16} />
        </Link>
      </div>
    </section>
  );
};

export default Courses;
