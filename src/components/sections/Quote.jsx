import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

export function Quote() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-12 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-64 h-64 gradient-primary opacity-20 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 gradient-secondary opacity-20 rounded-full blur-3xl"
          />

          <div className="relative z-10 text-center space-y-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                delay: 0.2, 
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1
              }}
              className="inline-block"
            >
              <QuoteIcon className="w-16 h-16 text-primary mx-auto" />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed"
            >
              “Programming isn’t about what you know; it’s about what you can figure out.”
            </motion.blockquote>

            <motion.cite
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground not-italic block"
            >
              — Chris Pine
            </motion.cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
