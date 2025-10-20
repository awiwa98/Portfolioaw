import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState({
    show: false,
    message: "",
    type: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validera formuläret
    let formIsValid = true;
    let errors = {};

    if (!formData.name) {
      formIsValid = false;
      errors.name = "Please enter your name.";
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      formIsValid = false;
      errors.message = "Please write your message.";
    }

    setErrors(errors);

  
    if (formIsValid) {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,  
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            subject: formData.subject,
            reply_to: formData.email,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
        )
        .then(() => {
          setModal({
            show: true,
            message: "Your message has been sent successfully!",
            type: "success",
          });
          setFormData({ name: "", email: "", message: "", subject: "" });

         
          setTimeout(() => setModal({ ...modal, show: false }), 3000);
        })
        .catch((error) => {
          setModal({
            show: true,
            message: "Something went wrong. Please try again.",
            type: "error",
          });

          // Stäng modalen efter 3 sekunder
          setTimeout(() => setModal({ ...modal, show: false }), 3000);
        });
    }
  };

  return (
    
    <div className="contact">
        <div className="contact" id="Contact"></div>
      <h2 className="contact-title">Contact me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="input-field"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          className="input-field"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="subject"
          className="input-field"
          placeholder="Subject (Optional)"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          className="textarea-field"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {modal.show && (
      <div className={`modal ${modal.show ? 'show' : ''} ${modal.type || ''}`}>
      <p>{modal.message}</p>
      <button 
        className={`modal-close-button ${modal.type === 'success' ? 'success-btn' : ''} ${modal.type === 'error' ? 'error-btn' : ''}`} 
        onClick={() => setModal({ ...modal, show: false })}
      >
        X
      </button>
    </div>
    
      )}
    </div>
  );
};

export default Contact;

