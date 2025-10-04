import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  DollarSign,
  Gamepad2,
  GraduationCap,
  Plane,
  Building2,
  Utensils,
  Music,
  Car,
  Home as HomeIcon,
  Smartphone
} from 'lucide-react';

const industries = [
  {
    name: 'E-commerce',
    icon: ShoppingCart,
    description: 'Build seamless shopping experiences',
    color: 'bg-blue-500',
  },
  {
    name: 'Health & Fitness',
    icon: Heart,
    description: 'Transform healthcare with technology',
    color: 'bg-red-500',
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Secure financial solutions',
    color: 'bg-green-500',
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Create engaging gaming experiences',
    color: 'bg-purple-500',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Innovative learning platforms',
    color: 'bg-yellow-500',
  },
  {
    name: 'Travel & Hospitality',
    icon: Plane,
    description: 'Enhance travel experiences',
    color: 'bg-indigo-500',
  },
  {
    name: 'Real Estate',
    icon: Building2,
    description: 'Smart property solutions',
    color: 'bg-orange-500',
  },
  {
    name: 'Food & Beverage',
    icon: Utensils,
    description: 'Streamline food delivery',
    color: 'bg-pink-500',
  },
  {
    name: 'Entertainment',
    icon: Music,
    description: 'Media streaming solutions',
    color: 'bg-cyan-500',
  },
  {
    name: 'Automotive',
    icon: Car,
    description: 'Connected vehicle technology',
    color: 'bg-gray-700',
  },
  {
    name: 'Home Services',
    icon: HomeIcon,
    description: 'On-demand service platforms',
    color: 'bg-teal-500',
  },
  {
    name: 'Social Media',
    icon: Smartphone,
    description: 'Connect people globally',
    color: 'bg-blue-600',
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-secondary mb-6">
            Industries We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover 102+ industry experts in E-commerce, Health and Fitness & more with,
            326+ technology specialists in Swift, Objective-C & more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 cursor-pointer border border-gray-100"
              >
                <div className={`${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don't see your industry?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We work with businesses across all sectors. Get in touch to discuss your needs.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
