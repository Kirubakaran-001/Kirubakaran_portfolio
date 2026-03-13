import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundDragon = ({ fireBreathing }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Determine active section using IntersectionObserver
    const sections = ['home', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -40% 0px', threshold: 0 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Soft Parallax on the container
  const parallaxY = -(scrollY * 0.05);

  const sectionVariants = {
    home: { x: '0%', y: '0%', scale: 1.05 },
    about: { x: '-2%', y: '3%', scale: 1.1 },
    projects: { x: '2%', y: '-2%', scale: 1.15 },
    contact: { x: '0%', y: '5%', scale: 1.05 }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Behind content
      pointerEvents: 'none', // Ensures web content remains clickable
      overflow: 'hidden'
    }}>
      <motion.div
        animate={activeSection}
        variants={sectionVariants}
        initial="home"
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          width: '100%',
          height: '100%',
          y: parallaxY, 
          filter: fireBreathing ? "drop-shadow(0 0 20px #0EA5E9) brightness(1.5)" : "drop-shadow(0 0 10px rgba(37, 99, 235, 0.2))",
          transition: "filter 0.5s ease"
        }}
      >
        <iframe
          title="Anya_SPY×FAMILY [and TimeLapse Video]"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/5ad7f6de4d304b2cbfd82f85c860a80e/embed?autostart=1&transparent=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_theme=dark&dnt=1"
          style={{
            width: '110vw',
            height: '110vh',
            marginLeft: '-5vw',
            marginTop: '-5vh',
            opacity: 0.65, // Mild transparency to keep text readable
            border: 'none',
            mixBlendMode: 'screen' 
          }}
        />
      </motion.div>
      
      {/* Fake fire breathing background glow overlay */}
      {fireBreathing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh',
            background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.4) 0%, transparent 60%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};

export default BackgroundDragon;
