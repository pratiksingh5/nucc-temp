import Image from "next/image";

import aboutImg from "../../public/about-new.svg";

const About = () => {
  return (
    <section className="wrapper bg-[#2DC7DF]">
      <div className="overflow-hidden  py-24 xs:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto xs:grid xs:grid-cols-1 md:grid-cols-2 md:gap-x-20 xs:gap-y-20 xs:place-items-center">
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center">
              <div className="lg:max-w-lg">
                <h2 className="text-2xl font-semibold leading-7 text-white">
                  Deploy faster
                </h2>
                <p className="mt-2 md:text-6xl font-bold tracking-tight text-white sm:text-5xl xs:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <Image src={aboutImg} alt="about" width={615} height={550} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
