import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaHtml5,
  FaPalette,
  FaJava,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaCodeBranch,
  FaGithub,
  FaFigma,
  FaMicrochip,
  FaReact,
} from "react-icons/fa";
import { TbBrandGolang, TbBrandCpp } from "react-icons/tb";
import { FiPenTool } from "react-icons/fi";
import {
  SiAdobephotoshop,
  SiPostman,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-[#182239] w-full rounded-b-3xl p-10 text-white border-t border-t-white/30">
        <Image
          src="/profile.jpg"
          alt="profile picture"
          height={300}
          width={300}
          className="rounded-full border-4 border-gray-600/60"
        />

        <header className="flex flex-col justify-center items-start w-full md:max-w-xl gap-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <h2 className="text-2xl font-semibold">
            My Journey into Software Development
          </h2>
          <p className="text-lg leading-relaxed">
            I am a motivated and dedicated Computer Engineering student at Afe
            Babalola University Ado-Ekiti, with a passion for technology and a
            strong academic background. I'm seeking opportunities to gain
            hands-on industry experience and contribute positively to real-world
            problems. I'm extremely enthusiastic about becoming a software
            engineer and stepping into the industry. When I'm not studying,
            coding, or designing, I enjoy sketching in my leisure time.
          </p>
          <Link href="/contact">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
              Get In Touch
            </button>
          </Link>
        </header>
      </div>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Technical Skills
            </h3>

            <div className="space-y-2">
              <p className="font-medium">Mid-Level Experience:</p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <FaHtml5 className="text-orange-500 mr-2" /> HTML
                </li>
                <li className="flex items-center">
                  <SiTailwindcss className="text-blue-500 mr-2" /> CSS
                </li>
                <li className="flex items-center">
                  <FiPenTool className="text-purple-500 mr-2" /> Graphic Design
                </li>
              </ul>

              <p className="font-medium mt-4">Entry-Level Experience:</p>
              <ul className="text-gray-600 space-y-1">
                <li className="flex items-center">
                  <TbBrandGolang className="text-blue-500 mr-2" /> Golang
                </li>
                <li className="flex items-center">
                  <FaJava className="text-red-500 mr-2" /> Java
                </li>
                <li className="flex items-center">
                  <AiOutlineJavaScript className="text-yellow-500 mr-2" />{" "}
                  Javascript
                </li>
                <li className="flex items-center">
                  <FaReact className="text-blue-500 mr-2" /> React
                </li>
                <li className="flex items-center">
                  <TbBrandCpp className="text-green-500 mr-2" /> C++/C
                </li>
                <li className="flex items-center">
                  <FaPalette className="text-pink-500 mr-2" /> UI/UX Design
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Soft Skills
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li className="flex items-center">
                <FaUsers className="text-green-500 mr-2" /> Self-discipline
              </li>
              <li className="flex items-center">
                <FaHandshake className="text-green-500 mr-2" /> Ethical
                Integrity
              </li>
              <li className="flex items-center">
                <FaUsers className="text-green-500 mr-2" /> Teamwork &
                Communication
              </li>
              <li className="flex items-center">
                <FaLightbulb className="text-green-500 mr-2" /> Dedication
              </li>
              <li className="flex items-center">
                <FaLightbulb className="text-green-500 mr-2" /> Leadership
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">
              Tools & Technologies
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li className="flex items-center">
                <FaCodeBranch className="text-purple-500 mr-2" /> Git
              </li>
              <li className="flex items-center">
                <FaGithub className="text-purple-500 mr-2" /> GitHub
              </li>
              <li className="flex items-center">
                <VscVscode className="text-purple-500 mr-2" /> VS Code
              </li>
              <li className="flex items-center">
                <FaFigma className="text-purple-500 mr-2" /> Figma
              </li>
              <li className="flex items-center">
                <FaMicrochip className="text-purple-500 mr-2" /> Arduino IDE
              </li>
              <li className="flex items-center">
                <SiPostman className="text-purple-500 mr-2" /> Postman
              </li>
              <li className="flex items-center">
                <SiPostgresql className="text-purple-500 mr-2" /> PostgreSQL
              </li>
              <li className="flex items-center">
                <SiMongodb className="text-purple-500 mr-2" /> MongoDB
              </li>
              <li className="flex items-center">
                <SiAdobephotoshop className="text-purple-500 mr-2" /> Photoshop
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-semibold">
              Software Developer (Frontend & Backend)
            </h3>
            <p className="text-gray-600 mb-2">
              Univelcity | June 2025 - Present
            </p>
            <p className="text-gray-700">
              Developing full-stack applications using JavaScript, React, and
              Tailwind CSS, with a focus on both frontend and backend
              technologies, contributing to innovative projects and enhancing
              user experiences.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold">Haven360 Labs Intern</h3>
            <p className="text-gray-600 mb-2">June 2024 - September 2024</p>
            <p className="text-gray-700">
              Worked on writing APIs for Smartparrot AI using Golang for backend
              development, an AI tool for managing and scheduling social media.
              Also replicated Figma designs for social media email post
              notifications using HTML and CSS.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold">Graphic Designer</h3>
            <p className="text-gray-600 mb-2">Self-Taught | 2020 - Present</p>
            <p className="text-gray-700">
              Created visually appealing and effective design solutions,
              including logos, social media graphics, and event banner designs.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold">C++ Programming Intern</h3>
            <p className="text-gray-600 mb-2">
              Ceped Institute of Information and Technology | June 2023 -
              September 2023
            </p>
            <p className="text-gray-700">
              Participated in a C++ programming internship class, gaining
              hands-on experience in C++ development.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold">Tech Event Participant</h3>
            <p className="text-gray-600 mb-2">IEEE ABUAD | 2023</p>
            <p className="text-gray-700">
              Participated in a tech event organized by the Institute of
              Electrical Electronics Engineers (IEEE) ABUAD, where I gained
              experience in building a DC motor from scratch using Arduino IDE.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-6xl mt-10 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Engineering</h3>
            <p className="text-gray-600 mb-2">Afe Babalola University Ado-Ekiti | Expected Graduation: 2027</p>
            <p className="text-gray-700">
              Studying computer engineering with a focus on software development, algorithms, and system design.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-semibold">High School</h3>
            <p className="text-gray-600 mb-2">Stars Comprehensive College,  Saw-Mill Ibadan| Graduated 2021</p>
            <p className="text-gray-700">
              Completed secondary school education in science department .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-[#182239] text-white">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and collaborate on
          innovative projects. Feel free to reach out if you'd like to discuss
          potential opportunities or just connect!
        </p>
        <Link href="/contact">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg transition-colors">
            Contact Me
          </button>
        </Link>
      </section>
    </main>
  );
}
