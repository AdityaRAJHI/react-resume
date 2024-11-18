import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Rajkumar Sinha</h1>
      <p>Mechanical Engineer | SDET | AWS Cloud Expert</p>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#awards">Awards</a>
      </nav>
    </header>
  );
}

export default Header;
