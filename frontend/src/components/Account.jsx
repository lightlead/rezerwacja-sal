import React from "react";
import { useNavigate } from "react-router-dom";

function Account({ user, onLogout }) {
  const navigate = useNavigate(); // Hook do nawigacji

  const handleLogout = () => {
    onLogout(); // Wylogowanie użytkownika
    navigate("/login"); // Przekierowanie na stronę logowania
  };

  const handleDeleteAccount = () => {
    // Symulacja usunięcia konta
    alert("Account deleted!");
    onLogout(); // Wylogowanie użytkownika
    navigate("/login"); // Przekierowanie na stronę logowania
  };

  // Mock rezerwacji użytkownika (docelowo będzie z backendu)
  const reservations = [
    { id: 1, date: "2024-12-01", time: "14:00" },
    { id: 2, date: "2024-12-05", time: "16:00" },
    { id: 3, date: "2024-12-10", time: "18:30" },
  ];

  if (!user) {
    return <p>Loading...</p>; // Zabezpieczenie przed brakiem danych
  }

  return (
    <div className="account-page">
      {/* Dane konta */}
      <div className="account-info">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleDeleteAccount}>Delete Account</button>
      </div>

      {/* Lista rezerwacji */}
      <div className="account-reservations">
        <h2>Your Reservations</h2>
        {reservations.length > 0 ? (
          <ul>
            {reservations.map((reservation) => (
              <li key={reservation.id}>
                <p><strong>Date:</strong> {reservation.date}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no reservations yet.</p>
        )}
      </div>
    </div>
  );
}

export default Account;
