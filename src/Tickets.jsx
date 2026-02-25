import { useState } from "react";
import TicketList from "./TicketList";

export default function Tickets({ tickets, setTickets }) {

  const [filter, setFilter] = useState("All");

  const filteredTickets =
    filter === "All"
      ? tickets
      : tickets.filter(t => t.status === filter);

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