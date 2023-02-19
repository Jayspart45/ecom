import React from "react";

export default function Contact() {
  return (
    <div id="Contact">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
