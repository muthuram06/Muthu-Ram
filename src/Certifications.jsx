import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  CalendarDays,
  Building2,
} from "lucide-react";

const certifications = [
  {
    title: "Introduction to Information Technology and AWS Cloud",
    provider: "Coursera",
    date: "Oct 2024",
    description:
      "Built foundational knowledge of information technology, cloud computing, AWS services, architecture, and deployment concepts.",
    link:
      "https://www.coursera.org/account/accomplishments/certificate/1ATG4PM1YBUL",
  },
  {
    title: "React Basics",
    provider: "Coursera",
    date: "Sept 2025",
    description:
      "Learned React fundamentals including components, state, hooks, and building interactive web interfaces.",
    link:
      "https://www.coursera.org/account/accomplishments/certificate/CHOVR01TCCSB",
  },
  {
    title: "Introduction to Software Engineering",
    provider: "Coursera",
    date: "Sept 2025",
    description:
      "Covered software development lifecycle, agile practices, version control, and collaborative engineering workflows.",
    link:
      "https://www.coursera.org/account/accomplishments/certificate/5IB946JQ4PE5",
  },
  {
    title: "JPMorgan Chase & Co. Software Engineering Job Simulation",
    provider: "Forage",
    date: "July 2026",
    description:
      "Completed a practical software engineering job simulation focused on software development tasks, financial data, visualization, and engineering workflows.",
    link:
      "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69ccc093fe737781858546a7_1785005538631_completion_certificate.pdf",
    featured: true,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#070b14] px-6 py-24 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-24 h-[400px] w-[400px] rounded-full bg-sky-500/[0.05] blur-[130px]" />

        <div className="absolute bottom-10 right-[-180px] h-[420px] w-[420px] rounded-full bg-teal-500/[0.05] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
              Credentials
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              learning.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Certifications and practical learning experiences that support
            my software engineering journey.
          </p>
        </motion.div>

        {/* ================= CERTIFICATION CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative rounded-3xl border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                cert.featured
                  ? "border-sky-400/20 bg-sky-400/[0.045]"
                  : "border-white/[0.08] bg-white/[0.03]"
              }`}
            >
              {/* Featured glow */}
              {cert.featured && (
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/[0.07] blur-3xl" />
              )}

              {/* Top */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/10 bg-sky-400/[0.08] text-sky-300">
                  <Award size={22} />
                </div>

                {cert.featured && (
                  <span className="rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-xl font-semibold leading-snug text-white md:text-2xl">
                {cert.title}
              </h3>

              {/* Meta */}
              <div className="relative mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Building2 size={14} />
                  {cert.provider}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {cert.date}
                </span>
              </div>

              {/* Description */}
              <p className="relative mt-5 text-[15px] leading-7 text-slate-400">
                {cert.description}
              </p>

              {/* Certificate link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/10 hover:text-white"
              >
                View Certificate

                <ExternalLink
                  size={15}
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}