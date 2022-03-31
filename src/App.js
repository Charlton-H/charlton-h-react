import About from './components/About';
import Footer from './components/Footer';
import ProjectList from './components/Project';
import Resume from './components/Resume';
import NavTabs from './components/NavTabs';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <ProjectList />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
