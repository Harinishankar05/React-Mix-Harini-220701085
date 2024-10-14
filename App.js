// src/App.js

import React from 'react';
import './App.css';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="navbar">
            <li><a href="#main">Main</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="main">
          <Main />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </div>
  );
}

export default App;
