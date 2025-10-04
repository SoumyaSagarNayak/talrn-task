import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import DeveloperCard from '../components/DeveloperCard';
import HireModal from '../components/HireModal';
import developersData from '../data/developers.json';

const FindIOSDev = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const countries = [...new Set(developersData.map((dev) => dev.country))].sort();
  const experienceLevels = [
    { label: 'All Experience', value: '' },
    { label: 'Junior (0-3 years)', value: '0-3' },
    { label: 'Mid-level (4-7 years)', value: '4-7' },
    { label: 'Senior (8+ years)', value: '8+' },
  ];

  const filteredDevelopers = developersData.filter((dev) => {
    const matchesSearch =
      dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCountry = !selectedCountry || dev.country === selectedCountry;

    let matchesExperience = true;
    if (selectedExperience === '0-3') {
      matchesExperience = dev.experience <= 3;
    } else if (selectedExperience === '4-7') {
      matchesExperience = dev.experience >= 4 && dev.experience <= 7;
    } else if (selectedExperience === '8+') {
      matchesExperience = dev.experience >= 8;
    }

    return matchesSearch && matchesCountry && matchesExperience;
  });

  const handleHireDeveloper = (developer) => {
    setSelectedDeveloper(developer);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-secondary mb-6">
            Find Your Perfect <span className="text-primary">iOS Developer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through 411+ pre-vetted iOS developers from 71+ countries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-secondary">Filter Developers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, title, or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            >
              {experienceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary">{filteredDevelopers.length}</span>{' '}
            developer{filteredDevelopers.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevelopers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <DeveloperCard
                developer={developer}
                onHire={handleHireDeveloper}
              />
            </motion.div>
          ))}
        </div>

        {filteredDevelopers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600 mb-4">No developers found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('');
                setSelectedExperience('');
              }}
              className="text-primary font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      <HireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        developerName={selectedDeveloper?.name}
      />
    </div>
  );
};

export default FindIOSDev;
