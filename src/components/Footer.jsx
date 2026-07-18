import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 transition-colors duration-300 dark:border-slate-800 dark:bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
            Muhammad <span className="text-[#F7B63F]">Uzair Sami</span>
          </h2>

          <p className="mt-2 text-slate-400">
            WordPress & React Developer
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex gap-5">

          <a
            href="mailto:uzairsami2000@gmail.com"
            className="rounded-full border border-slate-700 p-3 text-xl text-slate-900 dark:text-slate-900 dark:text-white transition hover:border-[#F7B63F] hover:text-[#F7B63F]"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Uzairsami2000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 p-3 text-xl text-slate-900 dark:text-slate-900 dark:text-white transition hover:border-[#F7B63F] hover:text-[#F7B63F]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/uzair-sami-891073309/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 p-3 text-xl text-slate-900 dark:text-slate-900 dark:text-white transition hover:border-[#F7B63F] hover:text-[#F7B63F]"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-500">
        © {new Date().getFullYear()} Muhammad Uzair Sami. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;