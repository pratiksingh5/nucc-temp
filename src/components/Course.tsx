// import homepageStyle from "../styles/homepage.module.css";

import Image from "next/image";
import courseImg from "../../public/coursesImg.jpg";

const HomePageCourse = () => {
  return (
    <div>
      <div className=" w-auto h-auto">
        <Image src={courseImg} alt="img" className=" rounded-lg" />
        <h5 className="font-bold text-lg">Sales Marketing</h5>
        <small className="text-gray-700">3 March</small>
      </div>
    </div>
  );
};

export default HomePageCourse;
