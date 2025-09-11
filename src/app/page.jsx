import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { FaHtml5, FaReact, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen p-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 bg-white max-w-6xl rounded-2xl shadow-lg">
        <Image
          src="/me.jpg"
          alt="victor Olumide"
          width={400}
          height={700}
          className="scale-x-[-1] md:rounded-r-2xl md:rounded-t-none rounded-t-2xl  bg-blend-lighten"
        />

        <div className="p-10 text-black">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold">Oyewumi Victor Olumide</h1>
          <h2 className="text-xl md:text-xl lg:text-3xl font-semibold mt-4">
            Junior Software Developer, Graphic Designer
          </h2>
          <p className="text-sm md:text-sm lg:text-xl font-medium mt-4">
            I am a passionate and dedicated junior software developer with a
            knack for creating efficient and scalable web applications. With a
            foundation in both front-end and back-end technologies, I thrive in
            collaborative environments where I can contribute to innovative
            projects. My goal is to continuously learn and grow as a developer
            while delivering high-quality solutions that meet user needs.
          </p>

          <div className="flex flex-row md:flex-col items-start mt-6">
            <Link href="/projects">
              <button className="bg-gray-800 hover:bg-gray-700 md:w-[200px] flex-1 p-2 text-white">
                View My Projects
              </button>
            </Link>
            <a href="/victor_olumide_resume.pdf" download>
              <button className="border md:w-[200px] border-amber-500 hover:border-gray-800 flex-1 p-2">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>

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
          <a href="https://linkedin.com/in/victor-olumide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/Victor-Olumide" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
            <FaGithub size={40} />
          </a>
          <a href="https://www.facebook.com/share/19vz7JKxo9/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
            <FaFacebook size={40} />
          </a>
          <a href="https://instagram.com/official _victor_olumide" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
            <FaInstagram size={40} />
          </a>
        </div>
      </section>
    </main>
  );
}
