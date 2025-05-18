import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { aboutMe, education, experiences } from '../data/sampleData';

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-8xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">À Propos</h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 mb-16 items-start">
            <div className="w-full md:w-1/2 flex justify-center items-start">
              <img 
                src={aboutMe.image} 
                alt={aboutMe.name} 
                className="max-w-lg w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 flex items-stretch">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full content-between">
                <div className="prose dark:prose-invert max-w-none h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Mes Valeurs</h3>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                    L'informatique m'a toujours attiré, depuis mes premiers pas dans la programmation. J'ai appris que la persévérance est la clé : chaque bug résolu, chaque projet terminé renforce cette conviction. À 42, j'ai vraiment compris l'importance du travail d'équipe. Les sessions de debug en binôme, les échanges de solutions, tout ça m'a montré que la collaboration est essentielle dans notre métier.
                  </p>
                </div>
                <div className="prose dark:prose-invert max-w-none h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Mon Projet Professionnel et Personnel</h3>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                    Je suis actuellement en train de vivre une aventure unique : je me forme à l'ESIEA en développement web et mobile tout en suivant le cursus de 42. C'est parfois un vrai défi de jongler entre les deux, mais ça me permet d'avoir une vision plus large du développement. J'ai toujours été attiré par l'IA et la cybersécurité, et ces formations me donnent les bases pour explorer ces domaines plus tard.
                  </p>
                </div>
                <div className="prose dark:prose-invert max-w-none h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Mes Qualités Humaines</h3>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                    Je suis curieux de voir comment les autres développeurs abordent leurs problèmes. Chaque développeur à sa façon de coder, et je trouve intéressant de comprendre ces différentes approches pour identifier les meilleures pratiques. C'est d'ailleurs pour ça que j'apprécie particulièrement le C et la programmation bas niveau : ça permet de vraiment comprendre les fondements. J'aime aussi partager ce que j'apprends, comme quand j'ai donné des cours de POO en Java à des lycéens. C'était une expérience enrichissante qui m'a permis de transmettre ma passion.
                  </p>
                </div>
                <div className="prose dark:prose-invert max-w-none h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Mes Centres d'Intérêt</h3>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                    Le Japon occupe une place spéciale dans mes souvenirs, particulièrement mon voyage au Mont Fuji. C'est un pays que j'aimerais revisiter ces prochaines années tellement il y avait d'endroits différents à visiter. Ce voyage m'a vraiment permis de prendre du recul et de me rendre compte à quel point j'aime découvrir de nouveaux paysages à travers la marche ou les moyens de transport.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;