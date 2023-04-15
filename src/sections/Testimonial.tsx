import Image from "next/image";
import quoteImg from "../../public/quoteImg.svg";

const Testimonial = () => {
  return (
    <section className=" w-full h-full flex items-center justify-center lg:py-32 sm:py-10 sm:px-5 flex-col">
      <h3 className="lg:text-6xl sm:text-4xl font-medium">
        What our <span className="text-[#2DC7DF]">Students say</span>
      </h3>
      <div className=" lg:w-[55%] sm:w-full md:py-12 md:px-16 sm:py-2 sm:px-4 mt-16 border-solid border-gray-200 border rounded-2xl">
        <Image src={quoteImg} alt="quotesIcon" className="mb-4" />
        <p className="text-lg leading-8 text-gray-600">
          We were seeking assistance in reaching out to businesses who would
          greatly benefit from our highly competitive on demand delivery
          services and in the process, we partnered with Remote Office to step
          up our email campaigning and lead generation. They have proven to be
          highly engaging and professional, always showing great interest in
          getting to know Brang and our requirements. They were welcoming of any
          changes and adaptable to feedback, which allowed our campaign to
          foster. The hard work put in by Labib and the Remote Office team has
          delivered a solid response rate to our outgoing emails! We would
          highly recommend Remote Office to any business who is looking to
          partner with a passionate Lead Generation Team!!
        </p>
        <div>
          <h6 className="font-bold mt-6 text-xl">Tracy Stone</h6>
          <p className="text-md text-gray-600">
            Sales Manager, BRANG – Think Delivery. Think Brang
          </p>
        </div>
      </div>
      <div className="lg:w-[55%] sm:w-full flex flex-wrap items-center justify-start gap-10 md:px-16 mt-10">
        <div className="w-20 h-20 border-[#2DC7DF] border-solid border-2 rounded-full flex items-center justify-center">
          <Image
            className="w-16 h-16 bg-white rounded-full"
            src={""}
            alt="profile"
          />
        </div>
        <div className="w-20 h-20 border-[#2DC7DF] border-solid border-2 rounded-full flex items-center justify-center">
          <Image
            className="w-16 h-16 bg-white rounded-full"
            src={""}
            alt="profile"
          />
        </div>
        <div className="w-20 h-20 border-[#2DC7DF] border-solid border-2 rounded-full flex items-center justify-center">
          <Image
            className="w-16 h-16 bg-white rounded-full"
            src={""}
            alt="profile"
          />
        </div>
        <div className="w-20 h-20 border-[#2DC7DF] border-solid border-2 rounded-full flex items-center justify-center">
          <Image
            className="w-16 h-16 bg-white rounded-full"
            src={""}
            alt="profile"
          />
        </div>
        <div className="w-20 h-20 border-[#2DC7DF] border-solid border-2 rounded-full flex items-center justify-center">
          <Image
            className="w-16 h-16 bg-white rounded-full"
            src={""}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
