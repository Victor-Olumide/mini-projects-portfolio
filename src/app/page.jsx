import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import HomeCard from "./components/HomeCard";
import SocialLinks from "./components/SocialLinks";
import SkillsGrid from "./components/SkillsGrid";

export default function Home() {
  return (
    <>
      <Header
        src="/logo.png"
        message={"welcome to my mini projects portfolio"}
      />

      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8">
        <HomeCard
          src="/me.jpg"
          title={"Junior Software Developer, Graphic Designer"}
          name={"Oyewumi Victor Olumide"}
          desc={
            " I am a passionate and dedicated junior software developer with a knack for creating efficient and scalable web applications. With a foundation in both front-end and back-end technologies, I thrive in collaborative environments where I can contribute to innovative projects. My goal is to continuously learn and grow as a developer while delivering high-quality solutions that meet user needs."
          }
        />

        <section className="mt-16 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Projects
          </h2>
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
              <button className="bg-red-600 hover:bg-red-700  cursor-pointer text-white px-6 py-3 rounded-lg">
                View All Projects
              </button>
            </Link>
          </div>
        </section>

        <SkillsGrid />

        <section className="mt-16 w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Connect With Me
          </h2>

          <SocialLinks />
        </section>
      </div>
    </>
  );
}
