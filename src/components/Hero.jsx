// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/Hero.css';

const Hero = ({ theme }) => {
  return (
    <section id="hero" className={`hero ${theme}` }>
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Hello, I'm
              </motion.span>
              <br />
              <motion.span 
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Husnul Khotib
              </motion.span>
            </h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Passionate about creating beautiful, responsive web applications with modern technologies.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.a 
                href="https://github.com/Chotifz" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#6e5494' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/husnul-khotib/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0077b5' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              {/* Replace with your actual image */}
              <div className="profile-placeholder">
                <img src="porto/image-1.jpg" alt="image-profile" />
              </div>
            </div>
            <div className="blob"></div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;