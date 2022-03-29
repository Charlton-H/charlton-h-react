import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="pt-5">
        <About />

        <ProjectList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
