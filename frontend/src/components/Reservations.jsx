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

  const [events, setEvents] = useState([
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodaj nowe wydarzenie do kalendarza
    const newEvent = {
      title: `Reserved`,
      date: formData.date,
    };

    setEvents([...events, newEvent]);

    // Resetuj formularz
    setFormData({ date: "", time: "" });
  };

  return (
    <div className="reservations-page">
      <div className="reservations-container">
        {/* Formularz */}
        <div className="reservations-form">
          <h2>Book a Court</h2>
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
              right: "dayGridMonth,timeGridWeek,timeGridDay", // Wybór widoków
            }}
            height="auto" // Dynamiczna wysokość
            events={events} // Lista wydarzeń
          />
        </div>
      </div>
    </div>
  );
}

export default Reservations;
