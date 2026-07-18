import { FaBriefcase, FaCode, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <section
  id="about-me"
  className="bg-white py-24 transition-colors duration-300 dark:bg-[#020617]"
>
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-[#F7B63F] uppercase tracking-[6px]">
            Get To Know Me
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
  About Me
</h2>

        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition dark:border-slate-700 dark:bg-slate-900">

              <FaBriefcase className="mb-4 text-4xl text-[#F7B63F]" />

              <h3 className="text-5xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
                3+
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Years Experience
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

              <FaCode className="mb-4 text-4xl text-[#F7B63F]" />

              <h3 className="text-5xl font-bold text-slate-900 dark:text-white">
                50+
              </h3>

              <p className="mt-2 text-slate-300">
                Projects Completed
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 sm:col-span-2">

              <FaGlobe className="mb-4 text-4xl text-[#F7B63F]" />

              <h3 className="text-5xl font-bold text-slate-900 dark:text-white">
                Worldwide
              </h3>

              <p className="mt-2 text-slate-300">
                Clients Across Multiple Countries
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-6 text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
              WordPress & React Developer
            </h3>

            <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
              I'm Muhammad Uzair Sami, a professional WordPress Developer with
              over 3 years of experience creating business websites,
              WooCommerce stores, landing pages, and custom web solutions.
            </p>

            <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
              I also build modern React applications using JavaScript,
              Tailwind CSS, APIs, and responsive UI design.
            </p>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              My goal is to deliver clean, fast, SEO-friendly websites that
              help businesses grow online.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;