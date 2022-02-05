// Imports
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
