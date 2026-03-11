import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Cpu, Code, Radio, Zap, ChevronRight, GraduationCap, CircuitBoard, MonitorSmartphone } from 'lucide-react';
import './index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Kiruba<span style={{color: 'var(--accent-cyan)'}}>karan</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Let's Talk</a>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '6rem' }}>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      style={{
        background: 'rgba(0, 240, 255, 0.1)',
        color: 'var(--accent-cyan)',
        padding: '0.5rem 1.25rem',
        borderRadius: '30px',
        fontSize: '0.9rem',
        fontWeight: '700',
        marginBottom: '2rem',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}
    >
      Electronics & Communication Engineer
    </motion.div>
    <motion.h1 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}
    >
      Kirubakaran S <br/>
      <span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>— ECE Student | <span className="gradient-text">Embedded Systems & IoT Enthusiast</span></span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', lineHeight: '1.6', marginBottom: '3rem' }}
    >
      "Passionate about Embedded Systems, IoT, and VLSI design."
    </motion.p>
    <motion.div 
      className="hero-buttons"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{ display: 'flex', gap: '1.25rem' }}
    >
      <a href="#projects" className="btn-primary">View Projects <ChevronRight size={20} /></a>
      <a href="#about" className="btn-secondary">About Me</a>
    </motion.div>
  </section>
);

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card" 
          style={{ lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.1rem' }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            I am an <strong style={{color: 'var(--text-primary)'}}>Electronics and Communication Engineering</strong> student interested in building real-world hardware systems using embedded technology. 
          </p>
          <p>
            My focus areas include Embedded Systems, IoT, Digital Electronics, and Verilog-based hardware design. I enjoy creating practical solutions for real-world problems, especially systems that can improve safety and disaster rescue operations.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ background: 'rgba(176, 38, 255, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-purple)' }}>
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Education</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Bachelor of Engineering in Electronics and Communication Engineering.</p>
            </div>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
              <CircuitBoard size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Interests</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Embedded Hardware Design, FPGA & Verilog, IoT Systems, Disaster Rescue Technology, Real-Time Monitoring Systems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Embedded Systems', icon: <Cpu /> },
    { name: 'Arduino', icon: <Cpu /> },
    { name: 'ESP32', icon: <Radio /> },
    { name: 'Verilog', icon: <Code /> },
    { name: 'Embedded C', icon: <Code /> },
    { name: 'Digital Electronics', icon: <Zap /> },
    { name: 'IoT System Design', icon: <MonitorSmartphone /> },
    { name: 'UART Communication', icon: <Radio /> },
    { name: 'FPGA Basics', icon: <CircuitBoard /> }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-heading">Technical <span className="gradient-text">Skills</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <span style={{ color: 'var(--accent-cyan)', display: 'flex' }}>{skill.icon}</span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'IoT Smart Parking System',
      desc: 'A real-time parking management system using ESP32, RFID payment system, IR sensors for slot detection, and a mobile app that shows available parking spaces and navigation to the reserved slot.',
      tags: ['ESP32', 'RFID', 'IR Sensors', 'IoT']
    },
    {
      title: 'Verilog Digital Lock System',
      desc: 'A Finite State Machine based digital lock implemented in Verilog with a 4-digit keypad password, limited wrong attempts, and LED indicators for system states.',
      tags: ['Verilog', 'FSM', 'Digital Logic', 'FPGA']
    },
    {
      title: 'Intelligent Human Life Detection System for Landslide Rescue',
      desc: 'A disaster rescue system designed to detect human presence under landslides and differentiate humans from animals to help rescue teams during emergencies.',
      tags: ['Embedded Systems', 'Sensors', 'Disaster Relief']
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{proj.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6', flexGrow: 1 }}>{proj.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {proj.tags.map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" style={{ color: 'var(--accent-purple)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', alignSelf: 'flex-start' }}>
              View Project <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="container">
    <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Build Something</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Feel free to reach out for collaborations, project inquiries, or just to say hi!</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan)', background: 'rgba(0,240,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Mail size={24} /></span>
            <span style={{ fontSize: '1.1rem', transition: 'color 0.3s' }} className="contact-link">kirubakaran@example.com</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-purple)', background: 'rgba(176,38,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Linkedin size={24} /></span>
            <span style={{ fontSize: '1.1rem', transition: 'color 0.3s' }} className="contact-link">LinkedIn Profile</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan)', background: 'rgba(0,240,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Github size={24} /></span>
            <span style={{ fontSize: '1.1rem', transition: 'color 0.3s' }} className="contact-link">GitHub Repository</span>
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required style={{ resize: 'vertical' }}></textarea>
          <button type="button" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>Send Message</button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', background: 'rgba(0,0,0,0.3)' }}>
    <h3 style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem', marginBottom: '1rem' }}>Kiruba<span style={{color: 'var(--accent-cyan)'}}>karan</span></h3>
    <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Kirubakaran S. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="content-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
