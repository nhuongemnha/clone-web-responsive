import React from "react";

const Header = () => {
  return (
    <div className="p-4 bg-black text-white ">
      <div className="container mb-12 flex justify-between md:h-16 mx-auto">
        <a href="#logo" className="flex font-bold items-center p-2">
          LOGO
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              href="#work"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              WORK
            </a>
          </li>
          <li className="flex">
            <a
              href="#services"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              SERVICES
            </a>
          </li>
          <li className="flex">
            <a
              href="#contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
            >
              CONTACT
            </a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
