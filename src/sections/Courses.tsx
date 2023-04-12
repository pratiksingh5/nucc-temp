import Course from "@/components/Course";
import homepageStyle from "../styles/homepage.module.css";

const Courses = () => {
  return (
    <section className="wrapper">
      <h1 className="text-center font-bold text-3xl">
        Unlimited access to 100+ Courses.
      </h1>
      <div className="flex justify-between mt-6">
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
      <div className="flex justify-center mt-6">
        <button className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;
