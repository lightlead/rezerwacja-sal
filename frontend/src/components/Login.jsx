import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullName, setFullName] = useState(""); // Dodano pole Full Name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook do nawigacji

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFullName("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Symulacja rejestracji
    alert("Registration successful!");
    const userData = {
      name: fullName, // Pobieramy wartość wprowadzonego imienia i nazwiska
      email: email,
    };

    onLogin(userData); // Wywołanie funkcji logowania z App.js
    navigate("/account"); // Przekierowanie na Account
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Symulacja logowania (zamiast backendu)
    const userData = {
      name: "John Doe", // To można zastąpić danymi z backendu
      email: email,
    };

    onLogin(userData); // Wywołanie funkcji logowania z App.js
    navigate("/account"); // Przekierowanie na Account
  };

  return (
    <div className="login-page">
      <div className="form-container">
        {isRegistering ? (
          <div>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label>
                Full Name*
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} // Aktualizujemy stan Full Name
                  required
                />
              </label>
              <label>
                Email Address*
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Password*
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label>
                Confirm Password*
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account?{" "}
              <button className="toggle-button" onClick={toggleForm}>
                Login
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                Email Address*
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Password*
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{" "}
              <button className="toggle-button" onClick={toggleForm}>
                Register
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
