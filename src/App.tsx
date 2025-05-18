import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Articles />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;