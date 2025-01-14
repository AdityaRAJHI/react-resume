import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
