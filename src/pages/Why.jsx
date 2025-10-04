import { motion } from 'framer-motion';
import {
  Clock,
  Shield,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Hire in 48 Hours',
    description: 'Get matched with pre-vetted developers within 2 days, not weeks or months.',
  },
  {
    icon: Shield,
    title: 'Pre-Vetted Talent',
    description: 'Every developer undergoes rigorous technical and communication assessments.',
  },
  {
    icon: DollarSign,
    title: 'Save 70% on Costs',
    description: 'Access world-class talent at competitive rates without compromising quality.',
  },
  {
    icon: Users,
    title: 'Global Talent Pool',
    description: 'Choose from 411+ iOS developers across 71+ countries worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '2512+ successful projects delivered for 250+ satisfied clients.',
  },
  {
    icon: Award,
    title: 'Top 3% Developers',
    description: 'Only the best developers make it through our selective vetting process.',
  },
  {
    icon: Globe,
    title: 'Flexible Engagement',
    description: 'Hire full-time, part-time, or project-based developers based on your needs.',
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description: 'Developers integrate smoothly with your existing team and workflows.',
  },
];

const Why = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-secondary mb-6">
              Why Choose <span className="text-primary">Talrn</span>?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building solutions to scale your team easier & faster. Our mission at Talrn is to
              bridge top tier talent with the best companies globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Talrn in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell us your needs',
                description:
                  'Share your project requirements, team size, and technical skills needed.',
              },
              {
                step: '02',
                title: 'Get matched instantly',
                description:
                  'Our AI-powered platform matches you with the perfect developers within 48 hours.',
              },
              {
                step: '03',
                title: 'Start building',
                description:
                  'Interview your matched developers and start working together immediately.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-7xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join 250+ companies that have scaled their teams with Talrn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '411+',
                label: 'iOS Developers',
              },
              {
                stat: '71+',
                label: 'Countries',
              },
              {
                stat: '2512+',
                label: 'Projects Delivered',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-xl text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the world's fastest-growing network of iOS developers and companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">
                Hire iOS Developer
              </button>
              <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
                Apply as Developer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Why;
