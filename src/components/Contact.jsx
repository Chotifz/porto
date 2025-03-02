// components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './css/Contact.css';

const Contact = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className={`contact ${theme}`} ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Talk</h3>
            <p>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info">
                  <h4>Location</h4>
                  <p>Indonesia</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="info">
                  <h4>Email</h4>
                  <p>chotife@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="info">
                  <h4>Phone</h4>
                  <p>+62 897 8629 828</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {formStatus.isSubmitted ? (
              <motion.div 
                className="thank-you-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                <motion.button 
                  className="btn btn-primary"
                  onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <motion.button 
                 type="submit" 
                 className="btn btn-primary"
                 disabled={formStatus.isSubmitting}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
               </motion.button>
             </form>
           )}
         </motion.div>
       </div>
     </div>
   </section>
 );
};

export default Contact;