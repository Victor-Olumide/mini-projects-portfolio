import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";
import React from "react";
import { jsProjects, reactProjects } from "../projectsData";

export default function Projects() {
  return (
    <main className="p-4 flex flex-col justify-center items-center">
      <section className="text-center mt-[52px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore My Professionally Curated Creative Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dive into a collection of my mini-projects built with JavaScript and React. Each project showcases different skills and concepts, from simple utilities to interactive game.
        </p>
      </section>
      
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
