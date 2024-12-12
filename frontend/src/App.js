import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import About from './components/About';
import Login from './components/Login';
import Account from './components/Account';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Stan zalogowania
  const [user, setUser] = useState(null); // Dane użytkownika
  const [menuVisible, setMenuVisible] = useState(false); // Widoczność menu w wersji mobilnej
  const [isMobile, setIsMobile] = useState(false); // Sprawdzenie, czy ekran jest mobilny

  // Funkcja do obsługi logowania
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Funkcja do obsługi wylogowania
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Funkcja do przełączania widoczności menu w wersji mobilnej
  const toggleMenu = () => {
    if (isMobile) {
      setMenuVisible(!menuVisible);
    }
  };

  // Ustawienie stanu "isMobile" na podstawie szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      {/* Nawigacja */}
      <div className={`main ${menuVisible ? 'expanded' : ''}`}>
        <img src="/images/logo.png" alt="Basketball Court Logo" onClick={toggleMenu} className="menu-toggle"/>
        <nav className={menuVisible || !isMobile ? 'visible' : 'hidden'}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'currentpage' : '')}>Home</NavLink>
          <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'currentpage' : '')}>Reservations</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'currentpage' : '')}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'currentpage' : '')}>About</NavLink>
          {isLoggedIn ? (
            <NavLink to="/account" className={({ isActive }) => (isActive ? 'currentpage' : '')} id="account">Account</NavLink>
          ) : (
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'currentpage' : '')} id="login">Login</NavLink>
          )}
        </nav>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/account" element={<Account user={user} onLogout={handleLogout} />} />
      </Routes>

      {/* Pasek na dole */}
      <div className="bottommain"></div>
    </Router>
  );
}

export default App;
