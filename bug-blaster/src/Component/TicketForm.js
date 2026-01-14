import React from "react";

export default function TicketForm() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("medium");

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newTicket = {
      title,
      description,
      priority,
      status: "open",
      createdAt: new Date().toISOString(),
    };
    console.log("New Ticket Submitted:", newTicket);
    clearForm();
  };

  const ticketData = {
    id: new Date().toISOString(),
    title,
    description,
    priority,
  };

  const priorities = { 1: "Low", 2: "Medium", 3: "High" };
  return (
    <div className="ticket-form">
      <h2>Submit a New Ticket</h2>
      <form onSubmit={handleForm} className="ticket-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-input"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="priority-group">
          <legend>Priority:</legend>
          {/* <select
            id="priority"
            name="priority"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select> */}

          <fieldset className="priority-fieldset">
            {Object.entries(priorities).map(([key, value]) => (
              <label key={key} className="priority-label">
                <input
                  type="radio"
                  id={`priority-${value}`}
                  name="priority"
                  value={value}
                  checked={priority === value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                {value}
              </label>
            ))}
          </fieldset>
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}
