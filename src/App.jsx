import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Tickets from "./Tickets";
import NewTicket from "./NewTicket";

export default function App() {

  // State Management: Initialize ticket data from localStorage (persistent storage)
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });

  // Side Effect: Sync updated ticket state to localStorage
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <>
      <nav className="navbar">
        <h2>Customer Support Ticketing Portal</h2>
        <div>
          {/* Client-side navigation without page reload */}
          <Link to="/">All Tickets</Link>
          <Link to="/new">Create Ticket</Link>
        </div>
      </nav>

      <Routes>

        {/* Default Landing Page */}
        <Route
          path="/"
          element={
            <Tickets
              tickets={tickets}       // Passing ticket data as props
              setTickets={setTickets} // Passing state updater
            />
          }
        />

        <Route
          path="/tickets"
          element={
            <Tickets
              tickets={tickets}
              setTickets={setTickets}
            />
          }
        />

        <Route
          path="/new"
          element={
            <NewTicket
              setTickets={setTickets}
            />
          }
        />

      </Routes>
    </>
  );
}