import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-white py-24 transition-colors duration-300 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="uppercase tracking-[6px] text-[#F7B63F]">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
            Have a project in mind? Feel free to contact me. I'll reply as soon
            as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="flex items-center gap-5 rounded-xl bg-white dark:bg-white shadow-lg dark:bg-slate-900 p-6">
  <FaEnvelope className="text-3xl text-[#F7B63F]" />

  <div>
    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>

    <a
      href="mailto:uzairsami2000@gmail.com"
      className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition hover:text-[#F7B63F]"
    >
      uzairsami2000@gmail.com
    </a>
  </div>
</div>

            <div className="flex items-center gap-5 rounded-xl bg-white shadow-lg dark:bg-slate-900 p-6">
              <FaPhoneAlt className="text-3xl text-[#F7B63F]" />

              <div>
  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>

  <a
    href="tel:+923335158763"
    className="text-slate-600 dark:text-slate-300 transition hover:text-[#F7B63F]"
  >
    +92 333 5158763
  </a>
</div>
            </div>

            <div className="flex items-center gap-5 rounded-xl bg-white shadow-lg dark:bg-slate-900 p-6">
              <FaLinkedin className="text-3xl text-[#F7B63F]" />

              <div>
  <h4 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h4>

  <a
    href="https://www.linkedin.com/in/uzair-sami-891073309/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 dark:text-slate-300 transition hover:text-[#F7B63F]"
  >
    Uzair Sami
  </a>
</div>
            </div>

            <div className="flex items-center gap-5 rounded-xl bg-white shadow-lg dark:bg-slate-900 p-6">
              <FaGithub className="text-3xl text-[#F7B63F]" />

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">GitHub</h4>
                

                <a
  href="https://github.com/Uzairsami2000"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-600 dark:text-slate-300 transition hover:text-[#F7B63F]"
>
  github.com/Uzairsami2000
</a>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-5 rounded-2xl bg-white shadow-lg dark:bg-slate-900 p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border border-slate-300 bg-white text-slate-900 dark:border border-slate-300 bg-white text-slate-900 dark:border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-transparent dark:text-white p-4 text-slate-900 dark:text-slate-900 dark:text-white outline-none focus:border-[#F7B63F]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border border-slate-300 bg-white text-slate-900 dark:border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-transparent dark:text-white p-4 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white outline-none focus:border-[#F7B63F]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border border-slate-300 bg-white text-slate-900 dark:border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-transparent dark:text-white p-4 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white outline-none focus:border-[#F7B63F]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-lg border border border-slate-300 bg-white text-slate-900 dark:border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-transparent dark:text-white p-4 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white outline-none focus:border-[#F7B63F]"
            ></textarea>

            <button
              className="rounded-lg bg-[#F7B63F] px-8 py-4 font-semibold text-black transition hover:bg-[#E6A62E]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;