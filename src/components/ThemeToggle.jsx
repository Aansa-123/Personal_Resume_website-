import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="glass-card hover:glow-primary transition-all duration-300"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-primary" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}
