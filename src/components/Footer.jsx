// components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ theme }) => {
 return (
   <footer className={`footer ${theme}`}>
     <div className="footer-container">
       <div className="footer-content">
         <div className="footer-logo">
           <h3>Husnul Khotib</h3>
           <p>Full Stack Developer</p>
         </div>
         
         <div className="footer-social">
           <a href="https://github.com/Chotifz" target="_blank" rel="noopener noreferrer">
             <FaGithub />
           </a>
           <a href="https://www.linkedin.com/in/husnul-khotib/" target="_blank" rel="noopener noreferrer">
             <FaLinkedin />
           </a>
           <a href="mailto:khotib.husnul@gmail.com">
             <FaEnvelope />
           </a>
         </div>
       </div>
       
       <div className="footer-bottom">
         <p>&copy; {new Date().getFullYear()} Husnul Khotib. All Rights Reserved.</p>
       </div>
     </div>
   </footer>
 );
};

export default Footer;
