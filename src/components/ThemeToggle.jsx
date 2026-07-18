import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const enabled =
      savedTheme === "dark" || (!savedTheme && prefersDark);

    setDark(enabled);

    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
  const nextTheme = !dark;

  console.log("Theme changed:", nextTheme);

  setDark(nextTheme);

  document.documentElement.classList.toggle("dark", nextTheme);

  localStorage.setItem("theme", nextTheme ? "dark" : "light");
}

  return (
    <button
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      {dark ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;