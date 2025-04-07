import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ Error: " + data.error);
      }
    } catch (error) {
      setResponseMessage("❌ Error sending message. Try again.");
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <section className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </section>
  );
}

export default Contact;