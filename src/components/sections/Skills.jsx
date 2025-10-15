import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, -5, 0],
                y: -10,
                transition: { duration: 0.4 },
              }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 group hover:glow-primary transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon
                    className="w-12 h-12 transition-transform duration-300"
                    style={{ color: skill.color }}
                  />
                </motion.div>
              </div>
              <p className="font-medium text-center text-sm relative z-10">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 glass-card p-8 rounded-3xl relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          />
          <h3 className="text-2xl font-bold mb-6 text-gradient relative z-10 text-center">
            Always Learning
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <p className="text-muted-foreground flex-1 text-center md:text-left">
              Continuously expanding my skill set and staying updated with the
              latest technologies. I enjoy experimenting with new tools and
              frameworks to build efficient and modern web applications. Always
              seeking opportunities to learn, grow, and contribute to innovative
              projects.
            </p>
            <div className="w-full md:w-94 flex-shrink-0">
              <DotLottieReact
                src="https://lottie.host/546a6e58-3511-4fc2-b4e0-1683f88cf47d/k3bUBCsnlv.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
