import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Neyah Johnson's Portfolio</h1>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Neyah Johnson. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
