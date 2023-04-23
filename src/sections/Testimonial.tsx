import { useState } from "react";
import Image from "next/image";
import quoteImg from "../../public/quoteImg.svg";
import personImg from "../../public/person.jpg";

const users = [
  {
    name: "Tracy Stone",
    title: "Sales Manager, BRANG – Think Delivery. Think Brang",
    content:
      "We were seeking assistance in reaching out to businesses who would greatly benefit from our highly competitive on demand delivery services and in the process, we partnered with Remote Office to step up our email campaigning and lead generation. They have proven to be highly engaging and professional, always showing great interest in getting to know Brang and our requirements. They were welcoming of any changes and adaptable to feedback",
    image: personImg,
  },
  {
    name: "John Doe",
    title: "CEO, ABC Inc.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et odio nec augue sagittis vestibulum. Donec sagittis elementum tellus ut tempus. Cras pellentesque tincidunt ante, vitae malesuada enim rutrum vel. In hac habitasse platea dictumst. Nullam laoreet varius tincidunt. Nulla facilisi.",
    image: personImg,
  },
];

const Testimonial = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  return (
    <section className=" w-full h-full flex items-center justify-center lg:py-32 xs:py-10 xs:px-5 flex-col">
      <h3 className="lg:text-6xl xs:text-4xl font-medium">
        What our <span className="text-[#2DC7DF]">Students say</span>
      </h3>
      <div className="lg:w-[55%] xs:w-full xs:h-full md:min-h-[25rem] md:py-12 md:px-16 xs:py-2 xs:px-4 mt-16 border-solid border-gray-200 border rounded-2xl">
        <Image src={quoteImg} alt="quotesIcon" className="mb-4" />
        <p className="text-lg leading-8 text-gray-600">
          {selectedUser.content}
        </p>
        <div>
          <h6 className="font-bold mt-6 text-xl">{selectedUser.name}</h6>
          <p className="text-md text-gray-600">{selectedUser.title}</p>
        </div>
      </div>

      <div className="lg:w-[55%] xs:w-full flex flex-wrap items-center justify-start gap-10 md:px-16 mt-10">
        {users.map((user) => (
          <div
            key={user.name}
            className={`w-24 h-24 rounded-full flex items-center justify-center border-solid border-2 ${
              user === selectedUser ? "border-[#2DC7DF]" : "border-transparent"
            }`}
          >
            <div
              className="w-20 h-20 flex items-center justify-center relative cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <Image
                className="w-16 h-16 rounded-full object-cover"
                src={user.image}
                alt={user.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
