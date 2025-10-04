import { X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-primary text-white py-3 px-4 relative"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center">
            <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded mr-3">
              NEW
            </span>
            <p className="text-sm sm:text-base font-medium">
              Get a Guaranteed Developer within 24 working hours.{' '}
              <a href="#" className="underline font-semibold hover:text-blue-100">
                Hire candidates
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-blue-100 ml-4"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
