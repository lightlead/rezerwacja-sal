import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <Router>
      {/* Nawigacja */}
      <div className="main">
        <NavLink to="/" className={({ isActive }) => isActive ? "currentpage" : ""}>Home</NavLink>
        <NavLink to="/reservations" className={({ isActive }) => isActive ? "currentpage" : ""}>Reservations</NavLink>
        <img src="/images/logo.png" alt="Basketball Court Logo" />
        <NavLink to="/contact" className={({ isActive }) => isActive ? "currentpage" : ""}>Contact</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "currentpage" : ""}>About</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "currentpage" : ""} id = "login">Login</NavLink>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Pasek na dole */}
      <div className="bottommain"></div>
    </Router>
  );
}

export default App;


