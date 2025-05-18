import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { aboutMe } from '../data/sampleData';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_h3eci2t',
      'template_uq6rbs1',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'kJ-zvc8wdQzAVXkCK'
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitMessage('Merci pour ton message, je te réponds dès que possible !');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitMessage('Une erreur est survenue, veuillez réessayer.');
      setTimeout(() => setSubmitMessage(''), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 pb-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Envie de discuter, d'échanger ou de partager une idée ? N'hésitez pas à me contacter !
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-10"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informations de contact</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">E-mail</h4>
                      <a 
                        href={`mailto:${aboutMe.email}`} 
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {aboutMe.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Localisation</h4>
                      <p className="text-gray-900 dark:text-white">{aboutMe.location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Suivez-moi</h3>
                  <div className="flex gap-3">
                    {aboutMe.socialLinks
                      .filter(link => link.icon.toLowerCase() === 'github' || link.icon.toLowerCase() === 'linkedin')
                      .map((link) => (
                        <a 
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
                        >
                          {link.icon.toLowerCase() === 'github' && <Github size={20} />}
                          {link.icon.toLowerCase() === 'linkedin' && <Linkedin size={20} />}
                          <span className="sr-only">{link.platform}</span>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Envoyez-moi un message</h3>
                
                {submitMessage && (
                  <div className="mb-6 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                    Merci pour ton message, je te réponds dès que possible !
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Votre e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;