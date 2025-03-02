// components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './css/Projects.css';

const Projects = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('all');

 
  const projectsData = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, MongoDB, and Stripe integration.',
      image: 'porto/tifzy-collections.png',
      categories: ['web', 'frontend', 'backend', 'api'],
      technologies: ['Next.js', 'MongoDB', 'Redux Toolkit',  'Tailwind CSS'],
      githubLink: 'https://github.com/Chotifz/tifzy-collections',
      liveLink: 'https://tifzy-collections.vercel.app/',
    },
    {
      id: 2,
      title: 'Courses harisenin x cakap project',
      description: 'A responsive web courses application.',
      image: 'porto//cakapxhr.png',
      categories: ['web', 'frontend'],
      technologies: ['React', 'Shadcn'],
      githubLink:'https://github.com/Chotifz/cakapxharisenin',
      liveLink: 'https://cakapxharisenin.vercel.app',
    },
    {
      id: 3,
      title: 'Consume API',
      description: 'Crud api test',
      image: 'porto/crud.png',
      categories: ['frontend', ],
      technologies: ['Tailwind CSS', 'React',],
      githubLink: 'https://github.com/Chotifz/harisenin-fetchapi',
      liveLink: 'https://harisenin-fetchapi.vercel.app/',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application that displays current and forecasted weather data for any location.',
      image: 'porto/project-1.png',
      categories: ['web', 'frontend'],
      technologies: ['React', 'Landing Page', 'Styled Components'],
      githubLink: 'https://github.com/Chotifz',
      liveLink: 'https://hadar-karya-utama.vercel.app',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: 'porto/portfolio.png',
      categories: ['web', 'frontend'],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      githubLink: 'https://github.com/Chotifz/porto',
      liveLink: 'https://chotifz.github.io/porto/',
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'api', name: 'API' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeTab));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className={`projects ${theme}`} ref={ref}>
      <div className="projects-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.div 
          className="project-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit={{ opacity: 0, y: 20 }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                className="project-card" 
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.15)` 
                }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <img src={project.image} alt="project-image" />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;