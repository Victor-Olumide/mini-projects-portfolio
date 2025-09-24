import Items from "../components/Items";
import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/HeroSection";
import CallToActionSection from "../components/CallToActionSection";

export default function About() {
  return (
    <main className="min-h-screen relative  w-full bg-gray-50">
      <HeroSection
        imageSrc="/profile.jpg"
        imageAlt="profile picture"
        title="About Me"
        subtitle="My Journey into Software Development"
        description="I am a motivated and dedicated Computer Engineering student at Afe Babalola University Ado-Ekiti, with a passion for technology and a strong academic background. I'm seeking opportunities to gain hands-on industry experience and contribute positively to real-world problems. I'm extremely enthusiastic about becoming a software engineer and stepping into the industry. When I'm not studying, coding, or designing, I enjoy sketching in my leisure time."
        buttonLink="/contact"
        buttonText="Get In Touch"
      />

      <SkillsSection />

      <section className="py-10 px-4 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Experience
        </h2>
        <div className="space-y-8">
          <Items
            title="Software Developer (Frontend & Backend)"
            date="Univelcity | June 2025 - Present"
            description="Developing full-stack applications using JavaScript, React, and Tailwind CSS, with a focus on both frontend and backend technologies, contributing to innovative projects and enhancing user experiences."
          />

          <Items
            title="Haven360 Labs Intern"
            date="June 2024 - September 2024"
            description="Worked on writing APIs for Smartparrot AI using Golang for backend development, an AI tool for managing and scheduling social media. Also replicated Figma designs for social media email post notifications using HTML and CSS."
          />

          <Items
            title="Graphic Designer"
            date="Self-Taught | 2020 - Present"
            description="Created visually appealing and effective design solutions, including logos, social media graphics, and event banner designs."
          />

          <Items
            title="C++ Programming Intern"
            date="Ceped Institute of Information and Technology | June 2023 - September 2023"
            description="Participated in a C++ programming internship class, gaining hands-on experience in C++ development."
          />

          <Items
            title="Tech Event Participant"
            date="IEEE ABUAD | 2023"
            description="Participated in a tech event organized by the Institute of Electrical Electronics Engineers (IEEE) ABUAD, where I gained experience in building a DC motor from scratch using Arduino IDE."
          />
        </div>
      </section>

      <section className="py-10 px-4 max-w-6xl mt-10 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education
        </h2>
        <div className="space-y-8">
          <Items
            title="Bachelor of Engineering in Computer Engineering"
            date="Afe Babalola University Ado-Ekiti | Expected Graduation: 2027"
            description="Studying computer engineering with a focus on software development, algorithms, and system design."
          />
          <Items
            title="High School"
            date="Stars Comprehensive College, Saw-Mill Ibadan | Graduated 2021"
            description="Completed secondary school education in science department."
          />
        </div>
      </section>

      <CallToActionSection
        title="Let's Work Together"
        description="I'm always excited to take on new challenges and collaborate on innovative projects. Feel free to reach out if you'd like to discuss potential opportunities or just connect!"
        buttonLink="/contact"
        buttonText="Contact Me"
      />
    </main>
  );
}
