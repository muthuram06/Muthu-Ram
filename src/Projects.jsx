import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Database,
  Brain,
  Code2,
  MessageSquareText,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AFNA’S GARDEN RESTAURANT",
    category: "Full-Stack Application",
    description:
      "A full-stack vegetarian restaurant management platform with online food ordering, cart, checkout, table booking, customer authentication, reviews, and an admin dashboard.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Razorpay",
    ],
    icon: Database,
    featured: true,
    live: "https://restaurant-backend-six-flax.vercel.app/",
    github: null,
  },

  {
    number: "02",
    title: "ECHOVISION",
    category: "AI / Deep Learning",
    description:
      "A multimodal AI system for online exam monitoring and audio-visual anomaly analysis, combining computer vision, facial landmarks, head-pose estimation, device detection, and deepfake detection techniques.",
    technologies: [
      "Python",
      "YOLOv8",
      "MediaPipe",
      "OpenCV",
      "Deep Learning",
    ],
    icon: Brain,
    featured: true,
    live: null,
    github: null,
  },

  {
    number: "03",
    title: "AI FLOOD RISK ASSESSMENT",
    category: "AI + Full-Stack",
    description:
      "A location-aware flood risk assessment platform that combines a modern web interface, Python-based AI analysis, geospatial data, and mapping APIs to provide risk insights for selected locations.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Google Maps API",
      "AI",
    ],
    icon: Code2,
    featured: false,
    live: "https://ai-powered-flood-risk-assessment-to-two.vercel.app/",
    github: null,
  },

  {
    number: "04",
    title: "HIVER CUSTOMER SUPPORT INTELLIGENCE",
    category: "NLP / Machine Learning",
    description:
      "An NLP-based customer support intelligence pipeline built from the Twitter Customer Support dataset, processing 81K+ customer problem messages and classifying support intents using TF-IDF and Logistic Regression.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Machine Learning",
      "Data Processing",
    ],
    icon: MessageSquareText,
    featured: false,
    live: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-40 h-[400px] w-[400px] rounded-full bg-sky-500/[0.06] blur-[130px]" />

        <div className="absolute bottom-20 right-[-200px] h-[450px] w-[450px] rounded-full bg-teal-500/[0.05] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

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
              Projects
            </span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Things I've{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                A selection of projects that showcase my experience across
                full-stack development, backend engineering, AI, and
                machine learning.
              </p>
            </div>

            <a
              href="https://github.com/muthuram06"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* ================= PROJECTS ================= */}

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/20 hover:bg-white/[0.05] md:p-8 ${
                  project.featured ? "min-h-[390px]" : "min-h-[350px]"
                }`}
              >

                {/* Top glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/[0.05] blur-3xl transition-all duration-500 group-hover:bg-sky-400/[0.1]" />

                {/* Project number */}
                <div className="relative flex items-start justify-between">
                  <span className="text-sm font-medium tracking-widest text-slate-600">
                    {project.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-sky-300 transition-all duration-300 group-hover:border-sky-400/20 group-hover:bg-sky-400/10">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-10">

                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="relative mt-8 flex items-center gap-3">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#070b14] transition-all duration-300 hover:bg-sky-100"
                    >
                      View Project
                      <ExternalLink
                        size={15}
                        className="transition-transform group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:text-white"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}

                  {!project.live && !project.github && (
                    <span className="text-xs text-slate-600">
                      Project details available on request
                    </span>
                  )}
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* ================= GITHUB CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/muthuram06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05] hover:text-white"
          >
            Explore More on GitHub
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}