import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    description: "Programming languages I use for development",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },

  {
    title: "Frontend",
    icon: Code2,
    description: "Modern and responsive web interfaces",
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    description: "APIs, services and server-side development",
    skills: [
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "REST APIs",
        logo: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png",
      },
    ],
  },

  {
    title: "Databases",
    icon: Database,
    description: "Relational and NoSQL database systems",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
  },

  {
    title: "Cloud & Deployment",
    icon: Cloud,
    description: "Application deployment and hosting",
    skills: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Render",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg",
      },
      {
        name: "CI/CD",
        logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
      },
    ],
  },

  {
    title: "Developer Tools",
    icon: Wrench,
    description: "Tools I use for development and collaboration",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Maven",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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

        {/* Header */}
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
              Skills
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              technical toolkit.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Technologies and tools I use to build full-stack applications,
            backend systems, APIs, and production-ready web solutions.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05] md:p-7"
              >
                {/* Category heading */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/10 bg-sky-400/[0.07] text-sky-300">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#0d1320] px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/20"
                    >
                      <img
                        src={skill.logo}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}