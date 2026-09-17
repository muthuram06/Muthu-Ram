import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  Mail,
  Download,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "home", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Skills", id: "skills", icon: Code2 },
    { name: "Projects", id: "projects", icon: FolderGit2 },
    { name: "Certifications", id: "certifications", icon: Briefcase },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  /* ================= SCROLL DETECTION ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLOSE MENU ================= */

  const handleNavigation = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-white/[0.10] bg-[#070b14]/90 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-white/[0.07] bg-white/[0.03] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-[68px] items-center justify-between px-4 md:px-5">

          {/* ================= LOGO ================= */}

          <button
            onClick={() => handleNavigation("home")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sm font-bold text-sky-300 transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-400/15">
              MR
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-bold text-white">
                Muthu Ram V
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Software Engineer
              </p>
            </div>
          </button>

          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {links.map(({ name, id, icon: Icon }) => {
              const active = activeSection === id;

              return (
                <button
                  key={id}
                  onClick={() => handleNavigation(id)}
                  className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-sky-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon size={15} />

                  {name}

                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-xl bg-sky-400/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ================= RESUME ================= */}

          <div className="hidden lg:block">
            <a
              href="https://drive.google.com/file/d/12EMyJvANaf-5sbAx38dblWWgMBADYEVQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/10"
            >
              <Download
                size={15}
                className="text-sky-300 transition-transform group-hover:-translate-y-0.5"
              />

              Resume
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-sky-400/20 hover:text-white lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/[0.07] lg:hidden"
            >
              <div className="p-3">

                {links.map(({ name, id, icon: Icon }, index) => {
                  const active = activeSection === id;

                  return (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      onClick={() => handleNavigation(id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                        active
                          ? "bg-sky-400/10 text-sky-300"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <Icon size={18} />

                      {name}

                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400" />
                      )}
                    </motion.button>
                  );
                })}

                {/* Mobile resume */}
                <a
                  href="https://drive.google.com/file/d/12EMyJvANaf-5sbAx38dblWWgMBADYEVQ/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-[#070b14]"
                >
                  <Download size={17} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;