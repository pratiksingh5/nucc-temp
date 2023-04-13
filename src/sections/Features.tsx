import Feature from "@/components/Feature";

const Features = () => {
  return (
    <section className=" md:px-24 sm:px-5 mt-20 w-full">
      <h1 className="text-center font-semibold mb-20 text-5xl">
        Key <span className="text-[#2DC7DF]">Features</span>
      </h1>
      <div className=" flex justify-evenly gap-10 flex-wrap">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </section>
  );
};

export default Features;
