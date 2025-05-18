import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Cpu } from 'lucide-react';
import { skills } from '../data/sampleData';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const tabs = [
    { id: 'all', label: 'All', icon: <Cpu className="w-5 h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'design', label: 'Design', icon: <Palette className="w-5 h-5" /> },
  ];

  const filteredSkills = skills.filter(skill => 
    activeTab === 'all' || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mes Compétences</h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Voici les technologies et outils avec lesquels je travaille
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.1 * (index % 9),
                        duration: 0.5 
                      }
                    }
                  }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level * 20}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${
                        skill.category === 'frontend' ? 'bg-primary-600' :
                        skill.category === 'backend' ? 'bg-secondary-600' :
                        skill.category === 'design' ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;