import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWordpress,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "WordPress",
      skills: [
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Elementor", icon: <SiElementor /> },
        { name: "WooCommerce", icon: <SiWoocommerce /> },
        { name: "PHP", icon: <FaPhp /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscCode /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white py-24 transition-colors duration-300 dark:bg-[#020617]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[6px] text-[#F7B63F]">
            My Skills
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
            Technologies I Use
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#F7B63F] dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="mb-8 text-2xl font-bold text-[#F7B63F]">
                {group.title}
              </h3>

              <div className="space-y-5">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-[#F7B63F] hover:bg-slate-800"
                  >
                    <div className="text-3xl text-[#F7B63F]">
                      {skill.icon}
                    </div>

                    <span className="text-lg text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;