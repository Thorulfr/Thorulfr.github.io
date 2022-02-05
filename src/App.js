// Imports
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
