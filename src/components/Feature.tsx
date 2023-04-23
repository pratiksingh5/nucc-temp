import { FaUser } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="lg:w-[31%] md:w-full md:h-72 xs:h-48 bg-[#F1F3F8] rounded-2xl">
      <div className="h-[45%] flex px-10 items-center md:gap-5 xs:gap-2 md:pt-16">
        <div className="bg-white md:w-16 md:h-16 xs:w-12 xs:h-12 rounded-lg flex items-center justify-center">
          <FaUser fontSize={26} color="#2DC7DF" />
        </div>
        <p className=" md:text-2xl xs:text-lg font-medium tracking-wide">
          Your Profile
        </p>
      </div>
      <div className="h-[55%] px-10 flex items-center">
        <p className="md:text-md xs:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem culpa provident fugit quaerat quisquam, ab cupiditate
          amet expedita iusto recusandae.
        </p>
      </div>
    </div>
  );
};

export default Feature;
