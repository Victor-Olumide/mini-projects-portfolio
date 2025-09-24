import { FaHtml5, FaReact } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import Link from "next/link";

const skills = [
  {
    icon: FaHtml5,
    color: "text-orange-500",
    name: "HTML",
  },
  {
    icon: SiTailwindcss,
    color: "text-blue-500",
    name: "Tailwind CSS",
  },
  {
    icon: AiOutlineJavaScript,
    color: "text-yellow-500",
    name: "JavaScript",
  },
  {
    icon: FaReact,
    color: "text-blue-400",
    name: "React",
  },
];

export default function SkillsGrid() {
  return (
    <section className="mt-16 w-full max-w-4xl text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <IconComponent className={`${skill.color} text-4xl mb-2`} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <Link href="/about">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 cursor-pointer rounded-lg">
            Learn More About Me
          </button>
        </Link>
      </div>
    </section>
  );
}
