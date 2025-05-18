import React from 'react';
import { aboutMe } from '../data/sampleData';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-1 sm:py-2 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-1 md:gap-0">
          {/* Bloc Nom & Titre */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start">
            <h2 className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400">
              Mehdi <span className="text-secondary-600 dark:text-secondary-400">Blal</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-[11px] sm:text-xs mt-0.5">Ingénieur Full Stack</p>
          </div>

          {/* Bloc Réseaux sociaux */}
          <div className="md:w-1/4 flex flex-row justify-center items-center space-x-1 sm:space-x-2 order-3 md:order-none mt-1 hidden sm:flex">
            {aboutMe.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                aria-label={link.platform}
              >
                {link.icon.toLowerCase() === 'github' && <Github size={13} />}
                {link.icon.toLowerCase() === 'linkedin' && <Linkedin size={13} />}
              </a>
            ))}
          </div>

          {/* Bloc Citation */}
          <blockquote className="md:w-2/4 italic text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs md:text-sm border-l-4 border-primary-600 dark:border-primary-400 pl-2 sm:pl-3 md:pl-4 mx-auto md:mx-0 flex items-center justify-center md:justify-end leading-tight">
            <span className="break-words text-center w-full">
               « Deviens quelqu'un qui ne fuit pas la douleur, mais qui l'utilise pour grandir. »
               <span className="block mt-0.5 font-semibold text-primary-600 dark:text-primary-400">- David Goggins</span>
            </span>
          </blockquote>
        </div>
        <div className="pt-1 border-t border-gray-200 dark:border-gray-700 w-full flex flex-col items-center mt-1">
          <span className="text-[10px] sm:text-xs text-gray-400">&copy; {currentYear} Mehdi Blal. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;