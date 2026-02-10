import { motion } from "framer-motion";

const categories = {
  "Featured Projects": [
    { 
      title: "Vivo Health – Healthcare Management Web App", 
      desc: " Developed a scalable healthcare platform to manage patient data and lab reports with a responsive frontend and secure backend", 
      github: "https://vivo-health-gold.vercel.app/" 
    },
    { 
      title: " AI-Powered Flood Risk Assessment System", 
      desc: "A full-stack SaaS platform for website hosting with subdomain support, ad injection for monetization, and built-in analytics. Uses React, Bootstrap, PocketBase, and Flask.", 
      github: "https://ai-powered-flood-risk-assessment-to-two.vercel.app/" 
    },
    { 
      title: " AI Resume Analyzer – Smart Resume Insights", 
      desc: "Built an AI-driven flood risk prediction system using Next.js, FastAPI,Python, and Google Maps API, achieving 90%+ accuracy through Gemini-enhanced geospatial analysis. Automated CI/CDwith Vercel and Render, reducing deployment time by 60% and delivering a robust live MVP", 
      github: "https://ai-resume-analyzer-lac-chi.vercel.app/" 
    },
  ],
};

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </span>
        </h2>
      </motion.div>

      
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {Object.entries(categories).map(([categoryName, projects], idx) => (
          <div key={idx}>
            
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-teal-200 mb-6"
            >
              {categoryName}
            </motion.h3>

           
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
                >
                  <h4 className="text-xl font-semibold text-teal-200 mb-2">
                    {project.title}
                  </h4>
                  {project.desc && (
                    <p className="text-gray-200 flex-grow mb-4">{project.desc}</p>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block text-sm font-medium text-sky-300 hover:text-sky-100 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      
        <div className="text-center mt-12">
          <a
            href="https://github.com/muthuram06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-teal-500 hover:bg-teal-400 rounded-full transition-colors duration-300 shadow-lg"
          >
            Explore More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
