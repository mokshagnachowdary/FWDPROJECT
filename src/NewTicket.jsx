import TicketForm from "./TicketForm";

export default function NewTicket({ setTickets }) {
  return (
    <div className="wrapper">
      <h3>Create New Ticket</h3>
      <TicketForm setTickets={setTickets} />
    </div>
  );
}