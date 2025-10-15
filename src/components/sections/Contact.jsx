import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    const form = e.target;

  emailjs
    .sendForm(
      import.meta.env.VITE_Service_ID,   // from EmailJS
      import.meta.env.VITE_Template_ID,  // from EmailJS
      form,
      import.meta.env.VITE_Public_Key    // from EmailJS
    )
    .then(
      () => {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. I’ll get back to you soon.",
        });
        form.reset();
        setIsSubmitting(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "❌ Failed to Send",
          description: "Please try again later.",
        });
        setIsSubmitting(false);
      }
    );
};

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
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
            Get In <span className="text-gradient">Touch</span>
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
            Have a project in mind? Let's work together to create something amazing
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="gradient-primary p-3 rounded-xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">Email Me</h3>
                  <p className="text-muted-foreground">aansarana786@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-2xl space-y-6"
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      delay: 0.1 * index, 
                      type: 'spring',
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="glass-card p-4 rounded-xl hover:glow-primary transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-center text-8xl"
            >
              📧
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 }}
              >
                <label className="text-sm font-medium">Name</label>
                <Input 
                  type="text"
                  namw="name"
                  placeholder="Your name" 
                  required 
                  className="glass-card"
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email" 
                   name="email"
                  placeholder="your12.email@example.com" 
                  required 
                  className="glass-card"
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                name="message" 
                  placeholder="Tell me about your project..." 
                  rows={6}
                  required 
                  className="glass-card resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  type="submit" 
                  className="w-full gradient-primary group"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
