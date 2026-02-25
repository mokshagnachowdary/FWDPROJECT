import TicketCard from "./TicketCard";

export default function TicketList({ tickets, setTickets }) {

  if (tickets.length === 0)
  
    return (
  <div className="empty-state">
    <p>No tickets available</p>
  </div>
);

  return (
    <>
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          setTickets={setTickets}
        />
      ))}
    </>
  );
}