import React, { useState } from "react";

const ComplaintForm = () => {
  const [text, setComplaint] = useState("");

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    alert("Отправлено");
    setComplaint("");
  };

  return (
    <form className="complaint-form" onSubmit={handleComplaintSubmit}>
        <textarea
          placeholder="Write your complaint..."
          value={text}
          onChange={(e) => setComplaint(e.target.value)}
          className="complaint-text"
        ></textarea>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default ComplaintForm;