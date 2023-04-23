import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import bannerImg from "../../public/bannerImg.svg";

const Banner = () => {
  return (
    <section className=" w-full h-full flex justify-center bg-[#F1F3F8] md:py-10 sm:pt-0 xs:pt-14 xs:px-5 ">
      <div className=" lg:w-[55%] xs:w-full h-full sm:flex xs:grid sm:justify-between xs:justify-center xs:items-center gap-y-10">
        <div className=" flex flex-col justify-center xs:items-center sm:items-start gap-10 sm:w-1/2 xs:w-full">
          <h3 className="font-semibold md:text-5xl xs:text-3xl">
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
        <div className="sm:w-1/2 xs:w-full h-full flex justify-center items-end border-none">
          <Image src={bannerImg} alt="bannerPhoto" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
