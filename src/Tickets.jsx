import { useState, useEffect, useMemo } from "react";
import TicketList from "./TicketList";

export default function Tickets({ tickets, setTickets }) {

  const [filter, setFilter] = useState("All");

  // Loading and Error states for async simulation
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulating async ticket fetch
  useEffect(() => {

    const timer = setTimeout(() => {
      try {
        setLoading(false);
      } catch {
        setError("Failed to load tickets");
      }
    }, 1000);

    // Cleanup to prevent memory leaks
    return () => clearTimeout(timer);

  }, []);

  // Memoized filtering to prevent unnecessary re-renders
  const filteredTickets = useMemo(() => {
    return filter === "All"
      ? tickets
      : tickets.filter(t => t.status === filter);
  }, [tickets, filter]);

  // Loading UI
  if (loading) return <p>Loading Tickets...</p>;

  // Error UI
  if (error) return <p>{error}</p>;

  return (
    <div className="wrapper">

      <h3>Ticket Overview</h3>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Open")}>Open</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Resolved")}>Resolved</button>
      </div>

      <TicketList
        tickets={filteredTickets}
        setTickets={setTickets}
      />

    </div>
  );
}