"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { NextPage } from "next";

interface Event {
    title: string;
    start: string;
    end: string;
  }
  
  interface FormData {
    date: string;
    time: string;
  }

const Page: NextPage = () => {
    const [formData, setFormData] = useState<FormData>({
        date: "",
        time: "",
      });
    
      const [events, setEvents] = useState<Event[]>([]);
      const [error, setError] = useState<string>(""); // Stan błędu
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: FormEvent) => {
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
        const newEvent: Event = {
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
        <div className="flex items-start p-10 justify-between gap-10 m-8">
            
            {/* Formularz */}
            <div className="sticky top-20 flex flex-col tile">
                <h2 className="text-2xl font-bold mb-4 text-center">Book a Court</h2>
                {error && <p className="text-red-500">{error}</p>} {/* Wyświetlenie błędu */}
                <form className="space-y-5 w-80" onSubmit={handleSubmit}>

                    {/* Data */}
                    <div className="flex flex-col">
                        <label>Select Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Godzina */}
                    <div className="flex flex-col">
                        <label>Select Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="sendButton">Reserve Now</button>
                </form>
            </div>


            {/* Kalendarz */}
            <div className="tile">
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
    );
}

export default Page;
