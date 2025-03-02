import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, 
  SiTailwindcss, SiRedux, SiFirebase,
  SiMysql
} from 'react-icons/si';
import './css/Skills.css';

const Skills = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skills = [
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 65 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Express', icon: <SiExpress />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
    { name: 'Redux', icon: <SiRedux />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'GitHub', icon: <FaGithub />, level: 90 },
    { name: 'npm', icon: <FaNpm />, level: 85 },
    // { name: 'MySQL', icon: <SiMysql />, level: 65 },
   
  ];

  return (
    <section id="skills" className={`skills ${theme}`} ref={ref}>
      <div className="skills-container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 10px 20px rgba(0, 0, 0, 0.1)` 
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div 
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                ></motion.div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;