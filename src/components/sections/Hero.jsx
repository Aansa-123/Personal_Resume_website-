import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const roles = [
  'MERN Stack Developer',
  'React Developer',
  'Node.js Developer',
  'MongoDB Expert',
  'Express.js Developer',
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(
            isDeleting
              ? role.substring(0, displayText.length - 1)
              : role.substring(0, displayText.length + 1)
          );
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative"
          >
            <motion.div 
              className="w-48 h-48 rounded-full gradient-primary p-1"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(var(--primary-rgb), 0.5)',
                  '0 0 60px rgba(var(--primary-rgb), 0.8)',
                  '0 0 20px rgba(var(--primary-rgb), 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img 
                src="https://i.postimg.cc/J0yq57TV/Aansa-Rani-professional.jpg" 
                alt="Aansa Rani" 
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border-2 border-dotted border-secondary/20"
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="text-gradient">Aansa Rani</span>
            </motion.h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                {displayText}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Highly motivated Full Stack Developer skilled in building and maintaining 
              web applications using React, Node, Express, and MongoDB.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.9 + index * 0.1, 
                  type: 'spring',
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-4 rounded-full hover:glow-primary transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="animate-float"
          >
            <a href="#about" className="inline-block">
              <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
