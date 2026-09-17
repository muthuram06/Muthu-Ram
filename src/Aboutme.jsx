import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  MapPin,
  Github,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function AboutMe({
  githubUsername = "muthuram06",
}) {
  const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0f1c] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-20 right-[-150px] h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Building software with{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            I'm a Computer Science graduate focused on full-stack development,
            backend engineering, and building practical software solutions.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ================= LEFT ================= */}

          <div className="space-y-8">

            {/* Introduction */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl md:p-9"
            >
              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Who I am
                  </p>

                  <h3 className="text-xl font-semibold">
                    Software Developer
                  </h3>
                </div>

              </div>

              <div className="space-y-4 text-[16px] leading-8 text-slate-300">

                <p>
                  I'm{" "}
                  <span className="font-semibold text-white">
                    Muthu Ram V
                  </span>
                  , a Computer Science graduate with a strong interest in
                  software engineering and full-stack development.
                </p>

                <p>
                  I enjoy turning ideas into real applications — from
                  responsive React interfaces to Java Spring Boot APIs,
                  database systems, and reliable backend services.
                </p>

                <p>
                  My current focus is writing clean, maintainable software
                  while continuously improving my problem-solving and
                  engineering skills.
                </p>

              </div>

              {/* Location */}

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                  <MapPin
                    size={15}
                    className="text-sky-300"
                  />
                  Chennai, India
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Open to opportunities
                </div>

              </div>
            </motion.div>

            {/* ================= EDUCATION ================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl md:p-9"
            >

              <div className="mb-7 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Education
                  </p>

                  <h3 className="text-xl font-semibold">
                    Academic Background
                  </h3>
                </div>

              </div>

              <div className="relative border-l border-white/10 pl-6">

                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

                <p className="text-sm font-medium text-sky-300">
                  2022 — 2026
                </p>

                <h4 className="mt-2 text-lg font-semibold text-white">
                  B.Tech — Computer Science & Engineering
                </h4>

                <p className="mt-2 text-slate-400">
                  SRM Institute of Science and Technology
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Ramapuram, Chennai · CGPA 7.73 / 10
                </p>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-8">

            {/* ================= TECHNOLOGIES ================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl md:p-8"
            >

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Technologies
                  </p>

                  <h3 className="text-xl font-semibold">
                    What I Work With
                  </h3>
                </div>

              </div>

              <div className="flex flex-wrap gap-2.5">

                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/[0.08] bg-[#111827] px-3.5 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:text-sky-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-7 border-t border-white/[0.08] pt-6">

                <p className="text-sm leading-6 text-slate-500">
                  Interested in full-stack engineering, Java backend
                  development, APIs, databases, and building reliable
                  web applications.
                </p>

              </div>

            </motion.div>

            {/* ================= GITHUB ================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl md:p-8"
            >

              {/* Header */}

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white">
                    <Github size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Open Source
                    </p>

                    <h3 className="text-xl font-semibold">
                      GitHub
                    </h3>
                  </div>

                </div>

                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-sky-400/30 hover:text-sky-300"
                >
                  <ArrowUpRight size={18} />
                </a>

              </div>

              {/* GitHub Profile */}

              <div className="mt-7 rounded-2xl border border-white/[0.08] bg-[#0d1320] p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">

                    <img
                      src={`https://github.com/${githubUsername}.png?size=120`}
                      alt={`${githubUsername} GitHub profile`}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      GitHub Profile
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      @{githubUsername}
                    </p>

                  </div>

                </div>

                {/* GitHub details */}

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">

                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Repositories
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      Public Projects
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">

                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      Software Development
                    </p>

                  </div>

                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Explore my repositories, source code, projects, and
                  development work.
                </p>

              </div>

              {/* GitHub Button */}

              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-sky-400/20 hover:bg-white/[0.06] hover:text-white"
              >
                View GitHub Profile
                <ArrowUpRight size={16} />
              </a>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}