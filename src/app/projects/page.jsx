import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const jsProjects = [
    {
      src: "/clock.png",
      title: "Digital Clock",
      desc: "A real-time digital clock displaying hours, minutes, and seconds with a clean, modern interface.",
      githubLink: "https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/digital-clock",
      hostedLink: "https://vo-digital-clock.vercel.app/",
    },
    {
      src: "/countdown.png",
      title: "Countdown Timer",
      desc: "An interactive countdown timer that allows users to set a specific time and counts down to zero with alerts.",
      githubLink: "https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/countdown-timer",
      hostedLink: "https://vo-countdown-timer.vercel.app/",
    },
    {
      src: "/covert.jpeg",
      title: "Roman Numeral Converter",
      desc: "A utility to convert numbers to Roman numerals and vice versa, supporting a wide range of values.",
      githubLink: "https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/roman-numeral-converter",
      hostedLink: "https://vo-roman-numeral-converter.vercel.app/",
    },
    {
      src: "/calc.jpeg",
      title: "Simple calculator",
      desc: "A basic calculator performing arithmetic operations like addition, subtraction, multiplication, and division.",
      githubLink: "https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/calculator",
      hostedLink: "https://vo-calculator.vercel.app/",
    },
    {
      src: "/todo.png",
      title: "Todo List Application",
      desc: "A task management app where users can add, edit, delete, and mark tasks as completed.",
      githubLink: "https://github.com/Victor-Olumide/javascript-mini-projects/tree/main/todo-list",
      hostedLink: "https://vo-todo-application.vercel.app/",
    },
  ];

  const reactProjects = [
    {
      src: "/passgen.png",
      title: "Password Generator",
      desc: "A tool to generate secure passwords with customizable length and character options.",
      githubLink: "https://github.com/Victor-Olumide/react-mini-projects",
      hostedLink: "https://react-mini-projects-pi.vercel.app/password-generator",
    },
    {
      src: "/quiz.png",
      title: "Quiz App",
      desc: "An interactive quiz application with multiple-choice questions and score tracking.",
      githubLink: "https://github.com/Victor-Olumide/react-mini-projects",
      hostedLink: "https://react-mini-projects-pi.vercel.app/quiz-app",
    },
    {
      src: "/tictactoe.png",
      title: "Tic Tac Toe Game",
      desc: "A classic Tic Tac Toe game for two players with win detection and game reset functionality.",
      githubLink: "https://github.com/Victor-Olumide/react-mini-projects",
      hostedLink: "https://react-mini-projects-pi.vercel.app/tic-tac-toe",
    },
    {
      src: "/char-counter.png",
      title: "Character Counter",
      desc: "A utility to count characters in text input, useful for writing and social media posts.",
      githubLink: "https://github.com/Victor-Olumide/react-mini-projects",
      hostedLink: "https://react-mini-projects-pi.vercel.app/character-counter",
    },
    {
      src: "/bmi-calc.png",
      title: "BMI Calculator",
      desc: "A health calculator that computes Body Mass Index based on height and weight inputs.",
      githubLink: "https://github.com/Victor-Olumide/react-mini-projects",
      hostedLink: "https://react-mini-projects-pi.vercel.app/bmi-calculator",
    },
  ];

  return (
    <main className="p-4 flex flex-col justify-center items-center">
      <section className="text-center">
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
