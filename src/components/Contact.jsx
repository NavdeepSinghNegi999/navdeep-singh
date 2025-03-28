// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section style={{ background: "#fff", padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center" }}>Let’s Discuss Your Project</h2>
      <p style={{ textAlign: "center" }}>
        Have a project idea or need my expertise? Drop me a message!
      </p>
      <form style={{
        maxWidth: "600px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem"
      }}>
        <input type="text" placeholder="Name" style={{ padding: "0.75rem", fontSize: "1rem" }}/>
        <input type="email" placeholder="Email" style={{ padding: "0.75rem", fontSize: "1rem" }}/>
        <textarea rows="5" placeholder="Project Details" style={{ padding: "0.75rem", fontSize: "1rem" }}/>
        <button className="btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
