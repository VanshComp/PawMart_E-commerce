import Home from './pages/Home';
import About from './pages/About';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Service from './pages/Service';
import Selling from './pages/Selling';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path='/Pet-Selling' element={<Selling/>} />
      </Routes>
    </Router>
  );
}

export default App;
