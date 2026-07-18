import profile from "../assets/images/profile/profile.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaWordpress,
  FaReact,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-24 lg:flex-row">
        {/* Left Side */}

        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#F7B63F] px-5 py-2 text-sm font-medium text-[#F7B63F]">
            👋 Hello, I'm
          </span>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl xl:text-6xl">
            Muhammad
            <br />
            Uzair Sami
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#F7B63F] lg:text-3xl font-semibold text-[#F7B63F]">
            WordPress & React Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 text-slate-600 dark:text-slate-300">
            I build high-quality, responsive websites and web applications
            using WordPress, React, JavaScript and modern technologies.
            Passionate about clean code and creating great user experiences.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-xl bg-[#F7B63F] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6A62E] hover:shadow-lg hover:shadow-[#F7B63F]/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-[#F7B63F] px-8 py-4 font-semibold text-[#F7B63F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7B63F] hover:text-black hover:shadow-lg hover:shadow-[#F7B63F]/20"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://github.com/Uzairsami2000"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition-all duration-300 hover:-translate-y-1 hover:text-[#F7B63F]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uzair-sami-891073309/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl transition-all duration-300 hover:-translate-y-1 hover:text-[#F7B63F]"
            >
              <FaLinkedin />
            </a>

            <FaWordpress className="text-3xl text-[#F7B63F]" />

            <FaReact
              className="animate-spin text-3xl text-cyan-400"
              style={{ animationDuration: "8s" }}
            />
          </div>
        </div>

        {/* Right Side */}

        <div className="relative flex items-center justify-center">
          {/* Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-[#F7B63F] opacity-20 blur-[120px]"></div>

          {/* Image */}

          <img
            src={profile}
            alt="Muhammad Uzair Sami"
            className="relative h-[450px] w-[450px] rounded-full border-[8px] border-[#F7B63F] object-cover shadow-[0_0_60px_rgba(247,182,63,0.25)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Premium Bottom Divider */}

      <div className="absolute bottom-0 left-0 w-full">
        <div className="mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-transparent via-[#F7B63F] to-transparent shadow-[0_0_30px_rgba(247,182,63,0.8)]"></div>
      </div>
    </section>
  );
}

export default Hero;