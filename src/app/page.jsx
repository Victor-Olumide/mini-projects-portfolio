import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { FaHtml5, FaReact, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import Header from "./components/Header";
import HomeCard from "./components/HomeCard";

export default function Home() {
  return (
    <>
      <Header src="/logo.png" message={"welcome to my mini projects portfolio"}/>

    <main className="flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8">
      <HomeCard src="/me.jpg" title={"Junior Software Developer, Graphic Designer"} name={"Oyewumi Victor Olumide"} desc={" I am a passionate and dedicated junior software developer with a knack for creating efficient and scalable web applications. With a foundation in both front-end and back-end technologies, I thrive in collaborative environments where I can contribute to innovative projects. My goal is to continuously learn and grow as a developer while delivering high-quality solutions that meet user needs."} />

      <section className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            src="/clock.png"
            title="Digital Clock"
            desc="A real-time digital clock with a modern interface."
            githubLink="https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/digital-clock"
            hostedLink="https://vo-digital-clock.vercel.app/"
          />
          <ProjectCard
            src="/passgen.png"
            title="Password Generator"
            desc="Generate secure passwords with customizable options."
            githubLink="https://github.com/Victor-Olumide/react-mini-projects"
            hostedLink="https://react-mini-projects-pi.vercel.app/password-generator"
          />
          <ProjectCard
            src="/quiz.png"
            title="Quiz App"
            desc="Interactive quiz with score tracking."
            githubLink="https://github.com/Victor-Olumide/react-mini-projects"
            hostedLink="https://react-mini-projects-pi.vercel.app/quiz-app"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/projects">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
              View All Projects
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-500 text-4xl mb-2" />
            <span className="text-sm font-medium">HTML</span>
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-blue-500 text-4xl mb-2" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <AiOutlineJavaScript className="text-yellow-500 text-4xl mb-2" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>

          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-4xl mb-2" />
            <span className="text-sm font-medium">React</span>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/about">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
              Learn More About Me
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect With Me</h2>

        <div className="flex justify-center gap-8">
          <a href="https://linkedin.com/in/victor-olumide" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin size={40} className="text-blue-600 hover:text-blue-800 transition-colors"/>
          </a>
          <a href="https://github.com/Victor-Olumide" target="_blank" rel="noopener noreferrer" >
            <FaGithub size={40} className="text-gray-800 hover:text-gray-600 transition-colors"/>
          </a>
          <a href="https://www.facebook.com/share/19vz7JKxo9/" target="_blank" rel="noopener noreferrer" >
            <FaFacebook size={40} className="text-blue-700 hover:text-blue-900 transition-colors"/>
          </a>
          <a href="https://instagram.com/official_victor_olumide" target="_blank" rel="noopener noreferrer" >
            <FaInstagram size={40} className=" text-pink-600 hover:text-pink-800 transition-colors" />
          </a>
        </div>
      </section>
    </main>
    </>
  );
}
