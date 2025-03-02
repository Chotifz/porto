// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className={`about ${theme}`} ref={ref}>
      <div className="about-container">
        <motion.div 
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-frame">
              {/* Replace with your actual image */}
              <div className="about-placeholder">
                <span>HK</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Who am I?</h3>
            <p>
              I'm Husnul Khotib, a passionate Full Stack Developer with a year of intensive self-learning and bootcamp experience. I'm dedicated to creating efficient, scalable, and user-friendly web applications.
            </p>
            <p>
              Although I'm new to the professional development scene, I've built 4-5 projects ranging from beginner to intermediate levels, focusing on modern web technologies including React, Next.js, Express, and MongoDB.
            </p>
            <p>
              I'm constantly learning and improving my skills to stay current with the latest web development trends and best practices.
            </p>
            
            <div className="about-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">Husnul Khotib</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">khotib.husnul@gmail.com</span>
              </div>
              <div className="detail">
                <span className="label">From:</span>
                <span className="value">Indonesia</span>
              </div>
              <div className="detail">
                <span className="label">Experience:</span>
                <span className="value">1 Year</span>
              </div>
            </div>
            
            <motion.a 
              href="/resume.pdf" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;