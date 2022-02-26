// Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Nav from './components/Header';
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
            <div className="flex flex-col min-h-screen">
                <Nav />
                <div className="grow">
                    <Routes>
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
