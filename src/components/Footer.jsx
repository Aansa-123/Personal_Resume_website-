import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.p 
            className="text-muted-foreground flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made by 
            <span className="text-gradient font-semibold">Aansa Rani</span>
          </motion.p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
