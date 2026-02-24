import React, { useState } from "react";

function QueueForm({ addOn }) {
  const [name, setName] = useState("");
  const [services, setServices] = useState("");

  const handelForm = (e) => {
    e.preventDefault();
    if (!name.trim() || !services.trim()) return;
    addOn({ name, services });
    setName("");
    setServices("");
  };

  return (
    <div className="form-wrap">
      <h3>Form</h3>
      <form onSubmit={handelForm} className="queueForm">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          value={name}
        />
        <select value={services} onChange={(e) => setServices(e.target.value)}>
          <option value="">Select Services</option>
          <option value="order">order</option>
          <option value="payment">Payment</option>
          <option value="delivery">Delivery</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueueForm;
