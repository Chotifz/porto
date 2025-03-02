// components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';


const ThemeToggle = ({ theme, toggleTheme }) => {
 return (
   <motion.button 
     className={`theme-toggle ${theme}`}
     onClick={toggleTheme}
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.3 }}
   >
     <div >{theme === 'light' ? <FaMoon />  : <FaSun />}</div>
   </motion.button>
 );
};

export default ThemeToggle;