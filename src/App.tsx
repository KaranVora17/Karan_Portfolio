import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import KeyImpact from './components/KeyImpact';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen terminal-bg" data-theme={theme}>
      <AnimatedBackground />
      <div className="matrix-bg">
        <div className="scan-line"></div>
      </div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <KeyImpact />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
