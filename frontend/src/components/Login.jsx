import React, { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
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
    alert("Registration successful!");
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
                <input type="text" placeholder="Enter your full name" required />
              </label>
              <label>
                Email Address*
                <input type="email" placeholder="Enter your email" required />
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
            <form>
              <label>
                Email Address*
                <input type="email" placeholder="Enter your email" required />
              </label>
              <label>
                Password*
                <input type="password" placeholder="Enter your password" required />
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
