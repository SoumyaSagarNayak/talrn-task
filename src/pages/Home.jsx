import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DeveloperCard from '../components/DeveloperCard';
import HireModal from '../components/HireModal';
import developersData from '../data/developers.json';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [email, setEmail] = useState('');

  const handleHireDeveloper = (developer) => {
    setSelectedDeveloper(developer);
    setIsModalOpen(true);
  };

  const handleHireClick = () => {
    setSelectedDeveloper(null);
    setIsModalOpen(true);
  };

  const featuredDevelopers = developersData.slice(0, 8);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
              Find & Hire iOS Developers
              <br />
              <span className="text-primary">with Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Hire pre-vetted remote iOS developers with strong technical &
              communication skills within 48 hours.
            </p>

            <div className="max-w-xl mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg"
                />
                <button
                  onClick={handleHireClick}
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Hire iOS Dev
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600">
              Looking for remote iOS dev jobs?{' '}
              <Link to="/apply-as-vendor" className="text-primary font-semibold hover:underline">
                Apply here
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredDevelopers.map((developer, index) => (
                <motion.div
                  key={developer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <DeveloperCard
                    developer={developer}
                    onHire={handleHireDeveloper}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-8">
              Explore <span className="font-bold text-primary">411+ iOS developers</span> from{' '}
              <span className="font-bold text-primary">71+ countries</span>, delivering{' '}
              <span className="font-bold text-primary">2512+ projects</span>.
            </p>
            <Link
              to="/find-ios-dev"
              className="inline-flex items-center text-primary font-semibold text-lg hover:gap-3 gap-2 transition-all"
            >
              View All Profiles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Talrn is the world's largest network of
              <br />
              top iOS talent.
            </h2>
            <p className="text-xl text-gray-300">
              Save 70% on staff costs, while driving innovation & growth. Guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary rounded-2xl p-8 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">Featured works on Talrn</h3>
              <p className="text-blue-100 mb-6">
                Explore the best works delivered by developers
              </p>
              <ArrowRight className="w-6 h-6 ml-auto" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary rounded-2xl p-8 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">See all profiles on Talrn</h3>
              <p className="text-blue-100 mb-6">
                Discover top developer profiles available on Talrn
              </p>
              <ArrowRight className="w-6 h-6 ml-auto" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary rounded-2xl p-8 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">Apply as a developer</h3>
              <p className="text-blue-100 mb-6">
                Start your journey as a developer with Talrn
              </p>
              <ArrowRight className="w-6 h-6 ml-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
              We've helped <span className="text-primary">250+</span> clients outsource their
              software development
            </h2>
            <p className="text-xl text-gray-600">And just to name a few...</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              'Remoteshare',
              '1871',
              'UCFS',
              'Keller Offers',
              'Simple night',
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <p className="text-xl font-bold text-secondary mb-2">{client}</p>
                  <p className="text-sm text-gray-500">12 month engagement</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
            Ready to scale your team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with Talrn today and hire world-class iOS developers.
          </p>
          <button
            onClick={handleHireClick}
            className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            Hire iOS Developer
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <HireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        developerName={selectedDeveloper?.name}
      />
    </div>
  );
};

export default Home;
