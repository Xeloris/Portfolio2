import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { articles } from '../data/sampleData';
import { Article } from '../types';
import { X } from 'lucide-react';
import ReactMarkdown, { Components } from 'react-markdown';

const FILTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'Compétences techniques', label: 'Compétences techniques' },
  { id: 'Compétences transverses', label: 'Compétences transverses' },
  { id: 'Réalisations', label: 'Réalisations' },
];

const markdownComponents: Components = {
  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-600 dark:text-primary-400" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-primary-600 dark:text-primary-400" {...props} />,
};

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(article => article.category === activeFilter);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  return (
    <section id="articles" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mes Articles</h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          </motion.div>

          {/* Filtres */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.slice(0, 9).map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{article.title}</h3>
                  </div>
                  <div className="flex justify-end items-end mt-4">
                    <span className="text-sm font-medium px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal pour afficher l'article complet */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedArticle.title}
              </h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {selectedArticle.content}
                </ReactMarkdown>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <span className="text-sm text-primary-600 dark:text-primary-400">
              </span>
              <span className="text-sm font-medium px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                {selectedArticle.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;