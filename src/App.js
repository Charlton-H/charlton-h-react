// import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-5">
        <About />

        <ProjectList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
