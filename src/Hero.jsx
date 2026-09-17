import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#070b14] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main glow */}
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.08] blur-[140px]" />

        <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-teal-500/[0.06] blur-[130px]" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070b14] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070b14] to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-28 md:px-10">
        <div className="w-full">

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex justify-center md:justify-start"
          >
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to Software Engineering Opportunities
            </div>
          </motion.div>

          {/* Small intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-center text-lg font-medium text-sky-300 md:text-left"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-center text-5xl font-black tracking-tight sm:text-6xl md:text-left md:text-7xl lg:text-8xl"
          >
            Muthu Ram{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              V
            </span>
          </motion.h1>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-4xl text-center text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl md:text-left md:text-4xl"
          >
            Software Engineer building{" "}
            <span className="text-sky-300">
              scalable web applications
            </span>{" "}
            and reliable software solutions.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg md:text-left"
          >
            Computer Science graduate focused on full-stack development,
            Java backend engineering, React applications, and reliable web systems. I enjoy turning ideas into reliable, user-focused
            products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
          >
            {/* Projects */}
            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#070b14] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-100 hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] sm:w-auto"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/12EMyJvANaf-5sbAx38dblWWgMBADYEVQ/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07] sm:w-auto"
            >
              <Download size={17} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex justify-center gap-3 md:justify-start"
          >
            <a
              href="https://github.com/muthuram06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:text-sky-300"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Tech strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.06] pt-7 md:justify-start"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
              Focused on
            </span>

            {["Java", "Spring Boot", "React", "Python", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-sky-300"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-300 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  );
}