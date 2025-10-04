import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const DeveloperCard = ({ developer, onHire }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-xl"
      onClick={() => onHire(developer)}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={developer.image}
          alt={developer.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-secondary mb-1">{developer.name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{developer.title}</p>
        <p className="text-gray-600 text-sm mb-3">
          Worked {developer.company ? `at ${developer.company}` : `on ${developer.company}`}
        </p>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{developer.country}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {developer.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
