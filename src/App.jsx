// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h2 className="loading-text">Chotif</h2>
      </div>
    );
  }

  return (
    <Router basename='/porto'>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero theme={theme} />
              <About theme={theme} />
              <Skills theme={theme} />
              <Projects theme={theme} />
              <Contact theme={theme} />
            </>
          } />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;