function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>Have Questions? <br /> Contact Us!</h1>
        <p>Whether you have questions about court availability, pricing, or anything else – we’re here to help!</p>
        <div className="email-box">
          <p>Email us at:</p>
          <a href="mailto:basketballcourts@example.com">basketballcourts@example.com</a>
        </div>
      </div>
      <div className="contact-right">
        <h2>Send us a message 🏀</h2>
        <form>
          <label>
            Full name*
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Email address*
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Subject
            <input type="text" placeholder="What is this about?" />
          </label>
          <label>
            Message*
            <textarea placeholder="Write your message here" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
  
export default Contact;
  