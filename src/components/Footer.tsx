import Image from "next/image";
import logo from "../../public/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-neutral-50 py-14 p-[7%]">
      <div className="container lg-py-24 lg-mx-auto lg-px-14">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-full md:w-1/2 w-full px-4 h-28">
            <Image
              src={logo}
              alt="logo"
              width="200"
              height="60"
              style={{ backgroundColor: "#fff" }}
            />
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a className="text-white-600 hover:text-gray-800">
                  123, lorem ipsum, sit dolar, 12345
                </a>
              </li>
              <li>
                <a className="text-white-600 hover:text-gray-800">
                  developers@mucc.com
                </a>
              </li>
              <li>
                <a className="text-white-600 hover:text-gray-800">
                  +91 1234567890
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Join the Community
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 xs:w-auto xl:mr-4 lg:mr-0 xs:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#2DC7DF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-neutral-50">
        <div className="lg-px-14 py-6 mx-auto flex items-center xs:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <span className="ml-3 text-xl">NUCC Career Center</span>
          </a>
          <p className="text-sm text-white-500 xs:ml-6 xs:mt-0 mt-4">
            © 2023 Career Center
          </p>
          <span className="inline-flex xs:ml-auto xs:mt-0 mt-4 justify-center xs:justify-start">
            <a className="text-white-500">
              <svg
                fill="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3text-white-500">
              <svg
                fill="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
