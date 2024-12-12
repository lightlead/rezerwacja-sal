import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(""); // Stan błędu

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Oblicz start i end czasu
    const start = `${formData.date}T${formData.time}`;
    const startDate = new Date(start);
    const endDate = new Date(startDate);
    endDate.setMinutes(startDate.getMinutes() + 90);

    // Sprawdź kolizję z istniejącymi wydarzeniami
    const hasConflict = events.some((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      // Sprawdzenie kolizji
      return (
        (startDate >= eventStart && startDate < eventEnd) || // Start nowego wydarzenia w trakcie istniejącego
        (endDate > eventStart && endDate <= eventEnd) || // Koniec nowego wydarzenia w trakcie istniejącego
        (startDate <= eventStart && endDate >= eventEnd) // Nowe wydarzenie obejmuje istniejące
      );
    });

    if (hasConflict) {
      setError("This time slot is already reserved.");
      return;
    }

    // Dodaj nowe wydarzenie do kalendarza
    const newEvent = {
      title: `Reserved`,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    };

    setEvents([...events, newEvent]);
    setError(""); // Reset błędu

    // Resetuj formularz
    setFormData({ date: "", time: "" });
  };

  return (
    <div className="reservations-page">
      <div className="reservations-container">
        {/* Formularz */}
        <div className="reservations-form">
          <h2>Book a Court</h2>
          {error && <p className="error-message">{error}</p>} {/* Wyświetlenie błędu */}
          <form onSubmit={handleSubmit}>
            <label>
              Select Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Select Time:
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Reserve Now</button>
          </form>
        </div>

        {/* Kalendarz */}
        <div className="reservations-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height="auto"
            events={events}
          />
        </div>
      </div>
    </div>
  );
}

export default Reservations;
