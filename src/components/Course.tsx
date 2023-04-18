import homepageStyle from "../styles/homepage.module.css";

const HomePageCourse = () => {
  return (
    <div>
      <div className={homepageStyle.course_wrapper}>
        <div className={homepageStyle.course_img}></div>
        <h5 className="font-bold text-lg">Sales Marketing</h5>
        <small className="text-gray-700">3 March</small>
      </div>
    </div>
  );
};

export default HomePageCourse;
