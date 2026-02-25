import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Tickets from "./Tickets";
import NewTicket from "./NewTicket";

export default function App() {

  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <>
      <nav className="navbar">
        <h2>Customer Support Ticketing Portal</h2>
        <div>
          <Link to="/">All Tickets</Link>
          <Link to="/new">Create Ticket</Link>
        </div>
      </nav>
      <h2>
        Current Tickets ({tickets.length})
      </h2>

      <Routes>

        {/* DEFAULT LANDING PAGE */}
        <Route
          path="/"
          element={
            <Tickets
              tickets={tickets}
              setTickets={setTickets}
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