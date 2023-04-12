import Image from "next/image";

const About = () => {
  return (
    <section className=" w-full">
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto w-4/6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-[#2DC7DF]">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <Image src="/about.png" alt="about" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
