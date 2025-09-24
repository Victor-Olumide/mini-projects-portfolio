import Image from "next/image";
import React from "react";
import { IoLogoVercel } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import Link from "next/link";

export default function ProjectCard({ src, title, desc, githubLink, hostedLink }) {
  return (
    <section className="flex flex-col justify-between bg-white gap-2 border border-white p-4 rounded-xl max-w-[800px] hover:shadow-lg transition-shadow duration-300">
        <Image
          src={src}
          alt={title}
          height={450}
          width={800}
          className="cursor-pointer hover:scale-110 transition-all"
          loading={"lazy"}
        />
      <h2 className="font-semibold">{title}</h2>
      <p>{desc}</p>
      <div className="flex gap-2">
        <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-x-2 items-start md:items-center bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"><FaGithub/> View on GitHub</Link>
        <Link href={hostedLink} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-x-2 items-start md:items-center bg-green-800 text-white px-3 py-1 rounded hover:bg-green-700"><IoLogoVercel/> View Live Demo</Link>
      </div>
    </section>
  );
}
