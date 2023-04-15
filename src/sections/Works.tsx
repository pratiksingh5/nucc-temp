import Image from "next/image";
import workImg from "../../public/workImg.svg";

const Works = () => {
  return (
    <section className="bg-[#2DC7DF] w-full h-full lg:flex sm:grid sm:gap-y-16 sm:justify-between sm:items-center lg:px-32 sm:px-5 lg:py-32 sm:py-10 mt-28">
      <div className=" lg:w-[50%] h-full flex flex-col justify-center lg:items-start sm:items-center lg:px-4 sm:w-full">
        <div className=" lg:w-4/5 sm:w-11/12">
          <h3 className=" text-white lg:text-6xl sm:text-4xl pb-4 font-medium">
            How it Works
          </h3>
          <p className="text-gray-50 pb-12 text-lg sm:text-md">
            Mangalore University Career Centre (MUCC) is an integrated
            employability platform, that connects the University, its Colleges,
            its Students.
          </p>
        </div>
        <div className="lg:w-4/5 sm:w-11/12 lg:h-96 sm:h-80 bg-white rounded-2xl flex items-center justify-center">
          <Image src={workImg} alt="image" />
        </div>
      </div>
      <div className=" lg:w-[50%] h-full flex flex-col gap-10 lg:justify-center sm:items-center lg:px-4 sm:w-full sm:mt-20 lg:mt-0">
        <div className="lg:w-4/5 sm:w-11/12 h-full flex sm:flex-wrap gap-5">
          <div className=" w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <span className="text-[#2DC7DF] text-3xl font-medium">01</span>
          </div>
          <div className=" flex flex-col justify-center gap-3 w-3/5">
            <h4 className="text-xl text-white font-medium">Update</h4>
            <p className="text-md text-gray-50">
              Update your Skill Profile from time to time Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <hr className="border-white w-4/5" />
        <div className="lg:w-4/5 sm:w-11/12 h-full flex sm:flex-wrap gap-5">
          <div className=" w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <span className="text-[#2DC7DF] text-3xl font-medium">02</span>
          </div>
          <div className=" flex flex-col justify-center gap-3 w-3/5">
            <h4 className="text-xl text-white font-medium">Enhance</h4>
            <p className="text-md text-gray-50">
              Enhance your skills by enrolling for courses, events, internships
              and other opportunities
            </p>
          </div>
        </div>
        <hr className="border-white w-4/5" />
        <div className="lg:w-4/5 sm:w-11/12 h-full flex sm:flex-wrap gap-5">
          <div className=" w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <span className="text-[#2DC7DF] text-3xl font-medium">03</span>
          </div>
          <div className=" flex flex-col justify-center gap-3 w-3/5">
            <h4 className="text-xl text-white font-medium">Showcase</h4>
            <p className="text-md text-gray-50">
              Showcase your skill profile to corporates in a manner you or they
              have never seen before
            </p>
          </div>
        </div>
        <hr className="border-white w-4/5" />
        <div className="lg:w-4/5 sm:w-11/12 h-full flex sm:flex-wrap gap-5">
          <div className=" w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <span className="text-[#2DC7DF] text-3xl font-medium">04</span>
          </div>
          <div className=" flex flex-col justify-center gap-3 w-3/5">
            <h4 className="text-xl font-medium text-white">Apply</h4>
            <p className="text-md text-gray-50">
              Apply for jobs and internships from corporates on MUCC that align
              to your skill sets
            </p>
          </div>
        </div>
        <hr className="border-white w-4/5" />
      </div>
    </section>
  );
};

export default Works;
