import Link from "next/link";
import homepageStyle from "../styles/homepage.module.css";
import { MdArrowForward } from "react-icons/md";

const stats: any = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const Hero = () => {
  return (
    <section className="lg:px-32 xs:px-5  pt-28 bg-[#F1F3F8] w-full">
      <div className={homepageStyle.hero_wrapper}>
        <div className={homepageStyle.hero_wrapper_overlay}>
          <div className="relative isolate h-[35rem] w-full">
            <div className="w-full h-full lg:pl-24 md:pl-14 xs:px-6 flex items-center">
              <div className="text-left">
                <h1 className="lg:text-6xl md:text-4xl xs:text-2xl tracking-wide font-semibold leading-tight text-white">
                  Get Started & <br /> Build Your Profile
                </h1>
                <p className="text-md mt-2 leading-8 text-white text">
                  We build beautiful digital products that add more value to
                  your product
                </p>
                <div className="mt-5 sm:max-w-[45%] xs:max-w-[60%]">
                  <Link
                    href="/"
                    className="rounded-full flex sm:gap-3 xs:gap-1 items-center justify-between bg-[#2DC7DF] px-6 py-3 sm:text-lg xs:text-xs font-semibold text-white border-none outline-none"
                  >
                    Build your Profile <MdArrowForward fontSize={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-24 md:py-32 xs:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-x-8 xs:gap-y-5 text-center md:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col xs:gap-y-2">
              <h2 className="text-left text-black-600 font-bold">
                Lorem ipsum
              </h2>
              <h6 className="text-left text-slate-900 font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </h6>
            </div>
            {stats.map((stat: any) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col xs:gap-y-2"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl md:text-3xl xs:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
