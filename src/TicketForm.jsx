import { useState } from "react";

export default function TicketForm({ setTickets }) {

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      subject,
      description,
      status: "Open",
    };

    setTickets(prev => [...prev, newTicket]);
    setSubject("");
    setDescription("");
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>

      <label>Subject</label>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Submit Ticket</button>

    </form>
  );
}