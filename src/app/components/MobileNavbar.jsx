"use client";

import { useState } from "react";
import GroupLink from "./GroupLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { navbar } from "../elements";

export default function MobileNavbar() {
  const [showNav, setShowNav] = useState(false);

  function handleMobileNavigation() {
    setShowNav(!showNav);
  }
  const mobile = navbar.map((item, index) => (
    <GroupLink key={index} title={item.name} link={item.href} />
  ));

  return (
    <>
      <ul className="md:hidden flex fixed w-full z-50 justify-between text-white bg-[#182239] px-8 py-5 gap-8 shadow-lg rounded-b-lg">
        <li
          className="text-xl cursor-pointer hover:text-gray-300 transition-all duration-300"
          onClick={handleMobileNavigation}
        >
          {showNav ? (
            <IoClose className="transition-transform duration-300 rotate-90" />
          ) : (
            <GiHamburgerMenu className="transition-transform duration-300" />
          )}
        </li>
        <GroupLink title="Home" link="/" />
      </ul>

      {showNav && (
        <ul
          className="md:hidden flex flex-col justify-start items-start fixed z-40 bg-[#182239] text-white px-8 py-5 gap-4 h-auto w-4/5 mt-12 border-r-2 border-white/30 shadow-2xl rounded-r-lg transition-all duration-300 ease-in-out"
          onClick={handleMobileNavigation}
        >
          {mobile}
        </ul>
      )}
    </>
  );
}
