import ProjectCard from "@/app/components/ProjectCard";
import { jsProjects, reactProjects } from "../projectsData";
import HeroText from "../components/HeroText";

export default function Projects() {
  return (
    <main className="p-4 flex flex-col justify-center items-center">
      <HeroText
        title="Explore My Professionally Curated Creative Projects"
        description="Dive into a collection of my mini-projects built with JavaScript and React. Each project showcases different skills and concepts, from simple utilities to interactive game."
      />

      <section className=" w-full max-w-6xl mt-15">
        <h2 className="text-2xl font-bold mb-4 text-center">
          JavaScript Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
          {jsProjects.map((project, index) => (
            <ProjectCard
              key={`js-${index}`}
              src={project.src}
              title={project.title}
              desc={project.desc}
              githubLink={project.githubLink}
              hostedLink={project.hostedLink}
              className="flex justify-center"
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-6xl mt-15">
        <h2 className="text-2xl font-bold mb-4 text-center">React Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
          {reactProjects.map((project, index) => (
            <ProjectCard
              key={`react-${index}`}
              src={project.src}
              title={project.title}
              desc={project.desc}
              githubLink={project.githubLink}
              hostedLink={project.hostedLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
