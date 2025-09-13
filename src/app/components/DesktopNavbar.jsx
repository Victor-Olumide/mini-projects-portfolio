"use client";
import { navbar } from "../elements";
import GroupLink from "./GroupLink";

export default function DesktopNavbar() {
  const desktop = navbar.map((item, index) => (
    <GroupLink key={index} title={item.name} link={item.href} />
  ));

  return (
    <div className="mt-0 flex items-start">
      <ul className="hidden md:flex fixed w-full z-10 justify-center text-white text-sm font-semibold bg-[#182239] px-16 py-4 gap-8">
        {desktop}
      </ul>
    </div>
  );
}
