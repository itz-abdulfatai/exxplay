/* eslint-disable react/prop-types */
import { useState } from "react";
import Nav from "./Nav";
// import { Link } from "react-router-dom";


export const Circle = ({ active }) => {
  return (
    <div
      className={` w-1 aspect-square rounded-full border-secondary border ${
        active && "bg-secondary"
      }`}
    ></div>
  );
};

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("home");

  return (
    <header className=" padding-x py-7 absolute left-0 right-0 flex justify justify-between items-center">
    <div className=" font-syne font-extrabold  text-md  uppercase md:text-xl">
      exxplay
    </div>
    {/* pc nav */}
    <Nav/>
    <a
      href="#contact"
      className=" uppercase px-2 md:px-5 py-[3px] md:py-[5px] border-2 rounded-full"
    >
      contact now
    </a>
  </header>
  )
}

export default Header