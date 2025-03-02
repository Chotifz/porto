// components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('all');

  // Replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, MongoDB, and Stripe integration.',
      image: '/project1.jpg',
      categories: ['web', 'frontend', 'backend'],
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubLink: 'https://github.com/Chotifz/project1',
      liveLink: 'https://project1.demo.com',
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A responsive task management application with drag-and-drop UI and real-time updates.',
      image: '/project2.jpg',
      categories: ['web', 'frontend'],
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      githubLink: 'https://github.com/Chotifz/project2',
      liveLink: 'https://project2.demo.com',
    },
    {
      id: 3,
      title: 'Blog API',
      description: 'RESTful API for a blog platform with user authentication and content management.',
      image: '/project3.jpg',
      categories: ['backend', 'api'],
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/Chotifz/project3',
      liveLink: 'https://project3.demo.com',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application that displays current and forecasted weather data for any location.',
      image: '/project4.jpg',
      categories: ['web', 'frontend'],
      technologies: ['React', 'OpenWeather API', 'Styled Components'],
      githubLink: 'https://github.com/Chotifz/project4',
      liveLink: 'https://project4.demo.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: '/project5.jpg',
      categories: ['web', 'frontend'],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      githubLink: 'https://github.com/Chotifz/portfolio',
      liveLink: 'https://portfolio.demo.com',
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
                  {/* Replace with actual image */}
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}{project.title.split(' ')[1]?.charAt(0)}</span>
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