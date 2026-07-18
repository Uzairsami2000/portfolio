import logo from "../assets/images/logo/logo.png";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="/">
          <img
  src={logo}
  alt="Muhammad Uzair Sami"
  className="h-8 w-auto sm:h-10 lg:h-12"
/>
        </a>

        {/* Menu */}

        <nav className="hidden md:block">

          <ul className="flex items-center gap-8">

            <li>
              <a
                href="#about"
                className="font-medium transition hover:text-[#F7B63F]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="font-medium transition hover:text-[#F7B63F]"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="font-medium transition hover:text-[#F7B63F]"
              >
                Projects
              </a>
            </li>

          </ul>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          <a
  href="#contact"
  className="inline-flex items-center rounded-full border border-[#F7B63F] bg-[#F7B63F] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6A62E] hover:shadow-lg hover:shadow-[#F7B63F]/30"
>
  Contact Me
</a>

          <ThemeToggle />

        </div>

      </div>
    </header>
  );
}

export default Navbar;