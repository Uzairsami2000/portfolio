import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const categories = [
    "All Projects",
    "WordPress",
    "React",
    "JavaScript",
    "HTML/CSS",
    "PHP",
  ];

  const [active, setActive] = useState("All Projects");

  const filteredProjects =
    active === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === active
        );

  return (
    <section
      id="projects"
      className="bg-white py-24 transition-colors duration-300 dark:bg-[#0B1120]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[6px] text-[#F7B63F]">
            Portfolio
          </span>

          <h2 className="... text-slate-900 dark:text-white">
            My Projects
          </h2>

        </div>

        {/* Tabs */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-6 py-3 transition ${
                active === category
                  ? "bg-[#F7B63F] text-black"
                  : "border border-slate-300 text-slate-900 hover:border-[#F7B63F] dark:border-slate-700 dark:text-white hover:border-[#F7B63F]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-900"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#F7B63F] px-3 py-1 text-sm font-medium text-black"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.live}
                    className="rounded-lg bg-[#F7B63F] px-5 py-2 font-semibold text-black hover:bg-[#E6A62E]"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="rounded-lg border border-[#F7B63F] px-5 py-2 text-[#F7B63F] hover:bg-[#F7B63F] hover:text-black"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;