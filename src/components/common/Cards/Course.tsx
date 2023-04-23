import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

const Course = () => {
  return (
    <div className="p-4 w-full my-4 md:w-1/3">
      <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          src="/cc.jpg"
          alt="course"
          width="100"
          height="36"
          className="lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl"
        />
        <div className="pt-2 ">
          <h1
            className={[
              outfit.className,
              "text-lg not-italic text-black leading-tight mb-1",
            ].join(" ")}
          >
            Data Analytics Career Track
          </h1>
          <h2 className="title-font font-normal text-sm opacity-70 text-black not-italic mb-2">
            Digital Self Paced Learning
          </h2>
          <div className="flex items-center flex-wrap">
            <Image
              src="/star.png"
              width="20"
              height="20"
              alt="star"
              className="mr-1"
            ></Image>
            <h2 className="font-normal text-sm opacity-70 leading-6">
              4.6 (1.2k Reviews)
            </h2>
            <Image
              src="/clock.png"
              width="16"
              height="16"
              alt="time"
              className="ml-7"
            ></Image>
            <h2 className="ml-1 text-sm leading-6 opacity-70">130 hour</h2>
          </div>
          <div className="flex items-center flex-wrap text-sm leading-6 not-italic font-sans opacity-70 mt-2 mb-8">
            BCA/ MCA/ BSc IT/ MSc IT
          </div>
          <div className="flex items-center flex-wrap mr-auto justify-between">
            <div>
              <div className="text-gray-400 mr-3 items-center md:ml-0  leading-none text-sm pr-3 w-5">
                {" "}
                Partner:
              </div>
              <div> Board Infinity</div>
            </div>

            <a className="text-white inline-flex items-center  px-3 py-3 md:ml-0 ml-auto rounded-3xl bg-[#2DC7DF] flex-wrap w-30 h-12">
              Join Course
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
