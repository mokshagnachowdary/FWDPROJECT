export default function TicketCard({ ticket, setTickets }) {

  const updateStatus = (newStatus) => {
    setTickets(prev =>
      prev.map(t =>
        t.id === ticket.id ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div className="ticket-card">

      <h4>{ticket.subject}</h4>
      <p>{ticket.description}</p>

      {/* STATUS BADGE */}
      <span className={`badge ${ticket.status}`}>
        {ticket.status}
      </span>

      {/* ACTION BUTTONS */}
      <div className="actions">
        <button
          className="progress-btn"
          onClick={() => updateStatus("Active")}
        >
          Active
        </button>

        <button
          className="resolve-btn"
          onClick={() => updateStatus("Resolved")}
        >
          Resolve
        </button>
      </div>

    </div>
  );
}