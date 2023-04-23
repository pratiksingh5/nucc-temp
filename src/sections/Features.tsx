import Feature from "@/components/Feature";

const Features = () => {
  return (
    <section className=" md:px-24 xs:px-5 mt-20 w-full">
      <h3 className="text-center font-semibold mb-14 md:text-5xl xs:text-3xl">
        Key <span className="text-[#2DC7DF]">Features</span>
      </h3>
      <div className=" lg:flex lg:justify-evenly gap-10 lg:flex-wrap xs:grid sm:grid-cols-2 xs:place-items-center xs:grid-cols-1">
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
