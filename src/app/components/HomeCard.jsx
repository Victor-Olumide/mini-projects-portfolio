import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeCard({src,name, title, desc}) {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 bg-white max-w-6xl rounded-2xl shadow-lg">
        <Image
          src={src}
          alt="victor Olumide"
          width={400}
          height={700}
          className="scale-x-[-1] md:rounded-r-2xl md:rounded-t-none rounded-t-2xl  bg-blend-lighten"
          loading={"lazy"}
        />

        <div className="p-10 text-black">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold">{name}</h1>
          <h2 className="text-xl md:text-xl lg:text-3xl font-semibold mt-4">
            {title}
          </h2>
          <p className="text-sm md:text-sm lg:text-xl font-medium mt-4">
           {desc}
          </p>

          <div className="flex flex-row md:flex-col items-start mt-6">
            <Link href="/projects">
              <button className="bg-gray-800 hover:bg-gray-700 md:w-[200px] cursor-pointer flex-1 p-2 text-white">
                View My Projects
              </button>
            </Link>
            <a href="/victor_olumide_resume.pdf" download>
              <button className="border md:w-[200px] border-amber-500 cursor-pointer hover:border-gray-800 flex-1 p-2">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
