import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import bannerImg from "../../public/bannerImg.svg";

const Banner = () => {
  return (
    <section className=" w-full h-full flex justify-center bg-[#F1F3F8] md:py-0 sm:pt-14 sm:px-5 ">
      <div className=" lg:w-[55%] sm:w-full h-full md:flex sm:grid md:justify-between sm:justify-center sm:items-center gap-y-10">
        <div className=" flex flex-col justify-center sm:items-center md:items-start gap-10 md:w-1/2 sm:w-full">
          <h3 className="text-4xl font-semibold">
            Join Over 1 Lakh+ <br /> learner
          </h3>
          <div className="flex">
            <Link
              href="/"
              className="rounded-full flex gap-3 items-center justify-between bg-[#2DC7DF] px-6 py-3 text-md font-semibold text-white border-none outline-none"
            >
              View All Courses <MdArrowForward fontSize={16} />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full h-full flex justify-center items-end border-none">
          <Image
            src={bannerImg}
            alt="bannerPhoto"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
