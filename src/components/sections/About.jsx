import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const downloadResume = async () => {
  try {
    const url = "https://drive.google.com/uc?export=download&id=1gpdB3QttgvRy319c_qa23aDB71WRDtMN";
    
    // Fetch the file
    const response = await fetch(url);
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const blobUrl = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Aansa-Rani-CV.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: open in new tab if download fails
    window.open("https://drive.google.com/uc?export=download&id=1gpdB3QttgvRy319c_qa23aDB71WRDtMN", "_blank");
  }
};

const experiences = [
  {
    icon: GraduationCap,
    title: 'BS Information Technology',
    description: 'Currently pursuing degree with focus on full-stack development',
  },
  {
    icon: Briefcase,
    title: '1 Year Experience',
    description: 'Building modern web applications with MERN stack',
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate MERN Stack Developer with hands-on experience in creating 
              dynamic, responsive, and user-friendly web apps. Pursuing BS in Information 
              Technology with a strong focus on backend and frontend integration.
            </motion.p>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="glass-card p-6 rounded-2xl hover:glow-primary transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="gradient-primary p-3 rounded-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <exp.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
            <Button
  className="gradient-primary hover:opacity-90 transition-opacity gap-2 group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={downloadResume}
>
  <Download className="w-4 h-4 group-hover:animate-bounce" />
  Download Resume
</Button>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative glass-card p-8 rounded-3xl">
              <DotLottieReact
      src="https://lottie.host/317b6e98-834f-4e73-ad6a-8df9878e4359/X09n17CJIF.lottie"
      loop
      autoplay
    />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
