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

export default function SkillsSection() {
  return (
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
  );
}
