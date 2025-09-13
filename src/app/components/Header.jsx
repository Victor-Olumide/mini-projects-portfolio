import Image from "next/image";
import React from "react";

export default function Header({ src, message }) {
  return (
    <div className="bg-[#182239] w-full p-4 text-white flex flex-row justify-evenly items-center gap-x-2 text-xl md:text-5xl mt-[52px] rounded-b-3xl">
      <Image src={src} alt="VO logo" height={100} width={100} loading={"lazy"} />
      <h1>{message}</h1>
    </div>
  );
}
