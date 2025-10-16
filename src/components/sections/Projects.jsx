import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Full-featured online store with product filters, shopping cart, and secure checkout',
    tags: ['React', 'Node.js', 'MongoDB', 'Payfast'],
    category: 'fullstack',
    github: 'https://github.com/Aansa-123/ecommerce-frontend',
    demo: 'https://mern-ecommerce-frontend-gamma.vercel.app/',
    image: '/ecommerce.avif',
  },
  {
    title: 'Blog Website',
    description: 'Modern blogging platform with authentication, create, edit, and publish posts',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/Aansa-123/mern-blog-frontend',
    demo: 'https://mern-stack-blog-website.netlify.app/',
    image: '/blog.avif',
  },
  {
    title: 'Loan Website',
    description: 'Comprehensive loan management system with application tracking and approval workflow',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    github: 'https://github.com/Aansa-123/Loan-Website',
    demo: 'https://loan-website-pi.vercel.app/',
    image: '/loan.webp',
  },
  {
    title: 'Calculator App',
    description: 'Clean and modern calculator with advanced mathematical operations',
    tags: ['React', 'JavaScript', 'Tailwind'],
    category: 'frontend',
    github: 'https://github.com/Aansa-123/Apexcify-Technology/tree/main/Calculator',
    demo: '#',
    image: '/calculator.webp',
  },
  {
    title: 'To-Do List App',
    description: 'Task management application with local storage and intuitive UI',
    tags: ['React', 'LocalStorage', 'CSS'],
    category: 'frontend',
    github: 'https://github.com/Aansa-123/To-Do-List',
    demo: '#',
    image: '/todolist.webp',
  },
  {
    title: 'Password Generator',
    description: 'Secure random password generator with customizable options and copy function',
    tags: ['React', 'JavaScript', 'Tailwind'],
    category: 'frontend',
    github: 'https://github.com/Aansa-123/PasswordGenerator-project',
    demo: '#',
    image: '/password Generator.webp',
  },
];

const categories = ['all', 'fullstack', 'frontend'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
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
            Recent <span className="text-gradient">Works</span>
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
            Check out some of my recent projects
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category ? 'gradient-primary' : 'glass-card'}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 gradient-secondary flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="relative z-10 h-full w-full object-cover"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                  }}
                />
              </div>

              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-xl font-bold group-hover:text-gradient transition-all"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge 
                        variant="secondary"
                        className="glass-card"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-card flex-1 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                      </motion.div>
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="gradient-primary flex-1 group/btn"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
