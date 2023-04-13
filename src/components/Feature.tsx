import { FaUser } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="w-[30rem] md:h-72 sm:h-48 bg-[#F1F3F8] rounded-2xl">
      <div className="h-[40%] flex px-10 items-center md:gap-5 sm:gap-2 md:pt-16">
        <div className="bg-white md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
          <FaUser fontSize={26} color="#2DC7DF" />
        </div>
        <p className=" md:text-2xl sm:text-lg font-medium tracking-wide">Your Profile</p>
      </div>
      <div className="h-[60%] px-10 flex items-center">
        <p className="md:text-md sm:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem culpa provident fugit quaerat quisquam, ab cupiditate
          amet expedita iusto recusandae.
        </p>
      </div>
    </div>
  );
};

export default Feature;
