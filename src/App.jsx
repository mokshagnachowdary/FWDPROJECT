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
          <Link to="/tickets">All Tickets</Link>
          <Link to="/new">Create Ticket</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/tickets"
          element={<Tickets tickets={tickets} setTickets={setTickets} />}
        />
        <Route
          path="/new"
          element={<NewTicket setTickets={setTickets} />}
        />
      </Routes>
    </>
  );
}