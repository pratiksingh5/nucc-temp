import HomePageCourse from "@/components/Course";
import homepageStyle from "../styles/homepage.module.css";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Courses = () => {
  return (
    <section className="md:px-20 md:my-28 xs:py-20 xs:px-5">
      <h1 className="text-center font-semibold mb-14 md:text-5xl xs:text-3xl">
        Unlimited access to <span className="text-[#2DC7DF]">100+ Courses</span>
        .
      </h1>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-10 place-items-center">
        <HomePageCourse />
        <HomePageCourse />
        <HomePageCourse />
        <HomePageCourse />
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
