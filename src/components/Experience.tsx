import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data/sampleData';

const Timeline = () => {
  // Fusionne et trie les événements (pro et éducation)
  const events = [
    ...experiences.map(e => ({
      type: 'pro',
      id: e.id,
      title: e.role,
      subtitle: e.company,
      duration: e.duration,
      description: e.description,
      technologies: e.technologies,
    })),
    ...education.map(e => ({
      type: 'edu',
      id: e.id,
      title: e.degree,
      subtitle: e.institution,
      duration: e.duration,
      description: [e.description],
      technologies: [],
    })),
  ].sort((a, b) => b.duration.localeCompare(a.duration)); // Trie du plus récent au plus ancien (ajuster si besoin)

  return (
    <motion.div variants={containerVariants} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 mb-10">
      {events.map((item, index) => (
        <motion.div
          key={item.type + '-' + item.id}
          variants={itemVariants}
          className={`mb-12 relative ${index === events.length - 1 ? "" : "pb-8"}`}
        >
          <div className="absolute -left-10 mt-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
            style={{ background: item.type === 'pro' ? '#2563eb' : '#f59e42' }}>
            {item.type === 'pro' ? (
              <Briefcase size={14} className="text-white" />
            ) : (
              <GraduationCap size={14} className="text-white" />
            )}
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
              <div>
                {item.type === 'pro' ? (
                  <>
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{item.subtitle}</h3>
                    <p className="text-gray-900 dark:text-white font-medium">{item.title}</p>
                  </>
                ) : (
                  <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">{item.title}</h3>
                )}
              </div>
              <span className="text-sm font-medium py-1 px-3 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                {item.duration}
              </span>
            </div>
            {item.type === 'pro' ? (
              <div className="mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                {item.description.map((desc, idx) => (
                  <div key={idx}>{desc}</div>
                ))}
              </div>
            ) : (
              <div className="mb-4 text-gray-600 dark:text-gray-400">{item.description[0]}</div>
            )}
            {item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Parcours</h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mon parcours professionnel et académique
            </p>
          </motion.div>
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;