import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Github } from "lucide-react";

export default function AboutMe({
  githubUsername = "muthuram06",
  theme = "tokyonight",
}) {
  const statCardBase = `https://github-readme-stats.vercel.app/api`;

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: "rgb(30, 40, 60)" }}
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <p className="text-lg leading-relaxed text-gray-200">
                  Hello, I'm{" "}
                  <span className="font-semibold bg-gradient-to-r from-sky-200 to-teal-200 bg-clip-text text-transparent">
                    Muthu Ram V
                  </span>{" "}
                  — a{" "}
                  <span className="text-sky-300">Full-Stack Developer</span> and
                  CSE undergrad at{" "}
                  <span className="text-sky-300">
                    SRM Institute of Science and Technology, Ramapuram
                  </span>
                  . I love crafting{" "}
                  <span className="font-medium text-white">
                    scalable web applications
                  </span>
                  , exploring{" "}
                  <span className="font-medium text-white">
                    software development
                  </span>
                  , and specializing as a{" "}
                  <span className="font-medium text-sky-300">
                    Java Developer
                  </span>
                  , while expanding my expertise across the{" "}
                  <span className="font-medium text-teal-300">
                    full-stack ecosystem
                  </span>
                  .
                </p>
              </motion.div>

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-400/20 rounded-xl">
                    <GraduationCap size={24} className="text-sky-300" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-200 to-white bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  <span className="font-semibold text-white">
                    B.Tech in Computer Science & Engineering
                  </span>
                  <br />
                  <span className="text-sky-200">
                    SRM Institute of Science and Technology, Ramapuram, Chennai
                  </span>
                  <br />
                  <span className="text-gray-300 text-base">
                    CGPA: 8.5 / 10 • Expected Graduation: May 2026 • Chennai, TN
                  </span>
                </p>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-400/20 rounded-xl">
                    <BookOpen size={24} className="text-teal-300" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">
                    Skills & Expertise
                  </h3>
                </div>
                <div className="grid gap-3 text-gray-200 text-lg">
                  <div>• Programming Languages: HTML, CSS, JavaScript, Java, C++</div>
                  <div>• Frameworks: Node.js, React</div>
                  <div>• Databases: MongoDB, PostgreSQL, MySQL</div>
                  <div>• Tools: Git, GitHub, Visual Studio Code</div>
                  <div>• Technical Skills: Full-Stack Web Development, Java</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: GitHub stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
                onClick={() => {
                  window.open(`https://github.com/${githubUsername}`, "_blank");
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-400/20 rounded-xl">
                    <Github size={24} className="text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                    GitHub Overview
                  </h3>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    loading="lazy"
                    className="w-full"
                    alt={`GitHub stats card for ${githubUsername}`}
                    src={`${statCardBase}?username=${githubUsername}&show_icons=true&include_all_commits=true&count_private=true&rank_icon=percentile&hide_border=true&theme=${theme}`}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
