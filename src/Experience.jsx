import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Java",
    provider: "Infosys Springboard",
    date: "Sept 2023",
    description:
      "Comprehensive introduction to Java programming covering fundamentals, object-oriented concepts, and problem-solving using Java.",
  },
  {
    title: "React Basics",
    provider: "Coursera",
    date: "Sept 2025",
    description:
      "Learned the core concepts of React.js, including components, state management, hooks, and building interactive web applications.",
  },
  {
    title: "Introduction to Software Engineering",
    provider: "Coursera",
    date: "Sept 2025",
    description:
      "Gained foundational knowledge of software development lifecycle, agile methodology, version control, and collaborative project practices.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 px-6 bg-[rgb(30,40,60)] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-200 mb-1">
              {cert.title}
            </h3>
            <p className="text-gray-400 mb-2">
              {cert.provider} • {cert.date}
            </p>
            <p className="text-gray-200 leading-relaxed">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
