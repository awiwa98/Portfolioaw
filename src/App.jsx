import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Neu from './pages/projects/Neu';
import Solenia from './pages/projects/Solenia';
import Todomate from './pages/projects/Todomate';

import './index.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="appContainer">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects/neu" element={<Neu />} />
          <Route path="/projects/solenia" element={<Solenia />} />
          <Route path="/projects/todomate" element={<Todomate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;








