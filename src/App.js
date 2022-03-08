// Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Nav from './components/Header';
import Footer from './components/Footer';

// Page imports
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState('/');
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Nav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <div className="grow flex">
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
