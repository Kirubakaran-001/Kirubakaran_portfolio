import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Cpu, Code, Radio, Zap, ChevronRight, GraduationCap, CircuitBoard, MonitorSmartphone } from 'lucide-react';
import './index.css';
import logoImg from './assets/kk-logo.jpg';
import BackgroundDragon from './BackgroundDragon';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src={logoImg} alt="KK Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-cyan)', boxShadow: '0 0 10px rgba(37,99,235,0.2)' }} />
        <div>Kiruba<span style={{ color: 'var(--accent-cyan)' }}>karan</span></div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
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
        background: 'rgba(37, 99, 235, 0.1)',
        color: 'var(--accent-blue)',
        padding: '0.5rem 1.5rem',
        borderRadius: '30px',
        fontSize: '0.9rem',
        fontWeight: '700',
        marginBottom: '2rem',
        border: '1px solid rgba(37, 99, 235, 0.3)',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}
    >
      Welcome to my Portfolio
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}
    >
      Kirubakaran S <br />
      <span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}> ECE Student | <span className="gradient-text">Embedded Systems & IoT Enthusiast</span></span>
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
            I am an <strong style={{ color: 'var(--text-primary)' }}>Electronics and Communication Engineering</strong> student interested in building real-world hardware systems using embedded technology.
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
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--accent-blue)' }}>
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Education</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Bachelor of Engineering in Electronics and Communication Engineering.</p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--accent-cyan)' }}>
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
                <span key={i} style={{ background: 'rgba(37, 99, 235, 0.05)', color: 'var(--accent-blue)', fontFamily: 'JetBrains Mono, monospace', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" style={{ color: 'var(--accent-purple)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', alignSelf: 'flex-start', textShadow: '0 0 8px rgba(37, 99, 235, 0.4)' }}>
              View Project <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = ({ onFormSubmit }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onFormSubmit();
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000); // Reset form after animation
  };

  return (
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
            <a href="mailto:kirubakaran15243@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent-cyan)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '16px', boxShadow: '0 0 10px rgba(37,99,235,0.2)' }}><Mail size={24} /></span>
              <span style={{ fontSize: '1.1rem', transition: 'color 0.3s' }} className="contact-link">kirubakaran15243@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/kirubakaran-s-b086ab355/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '16px', boxShadow: '0 0 10px rgba(37,99,235,0.2)' }}><Linkedin size={24} /></span>
              <span style={{ fontSize: '1.1rem', transition: 'color 0.3s' }} className="contact-link">LinkedIn Profile</span>
            </a>
            <a href="https://github.com/Kirubakaran-001" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent-teal)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '16px', boxShadow: '0 0 10px rgba(37,99,235,0.2)' }}><Github size={24} /></span>
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
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }}>
                <Mail size={48} />
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Thank you for your message! I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <input type="text" placeholder="Your Name" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} required />
              <input type="email" placeholder="Your Email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} required />
              <textarea rows="5" placeholder="Your Message" value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} required style={{ resize: 'vertical' }}></textarea>
              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>Send Message</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', background: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
    <h3 style={{ fontFamily: 'Rajdhani', fontWeight: '800', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Kiruba<span style={{ color: 'var(--accent-cyan)' }}>karan</span></h3>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <a href="mailto:kirubakaran15243@gmail.com" style={{ color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.1)', padding: '0.6rem', borderRadius: '50%', boxShadow: '0 0 10px rgba(56, 189, 248, 0.2)', transition: 'all 0.3s ease' }} className="footer-icon"><Mail size={20} /></a>
      <a href="https://www.linkedin.com/in/kirubakaran-s-b086ab355/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple)', background: 'rgba(245, 158, 11, 0.1)', padding: '0.6rem', borderRadius: '50%', boxShadow: '0 0 10px rgba(245, 158, 11, 0.2)', transition: 'all 0.3s ease' }} className="footer-icon"><Linkedin size={20} /></a>
      <a href="https://github.com/Kirubakaran-001" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-teal)', background: 'rgba(56, 189, 248, 0.1)', padding: '0.6rem', borderRadius: '50%', boxShadow: '0 0 10px rgba(56, 189, 248, 0.2)', transition: 'all 0.3s ease' }} className="footer-icon"><Github size={20} /></a>
    </div>

    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>© {new Date().getFullYear()} Kirubakaran S. All rights reserved.</p>
  </footer>
);

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'var(--bg-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, pointerEvents: 'none' }}
    >
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '3px solid transparent', borderTopColor: 'var(--accent-cyan)', borderRightColor: 'var(--accent-blue)', boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)', boxSizing: 'border-box' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', width: '130%', height: '130%', borderRadius: '50%', border: '1px dashed var(--accent-teal)', opacity: 0.5, boxSizing: 'border-box' }}
        />
        <img src={logoImg} alt="Loading Logo" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', zIndex: 2, filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.4))' }} />
      </div>
    </motion.div>
  );
};

const PacmanMessage = ({ message, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // Give it enough time to exit
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="pacman-container">
      <motion.div
        className="pacman-path"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        <div className="pacman-text">
          {message.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.45 + (i * 0.08), duration: 0.01 }} // Calculate exact delay roughly matching pacman's speed
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="pacman"
          initial={{ left: -60 }}
          animate={{ left: '100%' }}
          transition={{ duration: 3, delay: 0.3, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showPacman, setShowPacman] = useState(false);
  const [fireBreathing, setFireBreathing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = () => {
    setShowPacman(true);
    setFireBreathing(true);
    setTimeout(() => {
      setFireBreathing(false);
    }, 2000);
  };

  return (
    <>
      <BackgroundDragon fireBreathing={fireBreathing} />
      {loading && <LoadingScreen />}
      {showPacman && (
        <PacmanMessage
          message="Thank you for your message!"
          onComplete={() => setShowPacman(false)}
        />
      )}
      <div className="content-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact onFormSubmit={handleContactSubmit} />
        <Footer />
      </div>
    </>
  );
}

export default App;
