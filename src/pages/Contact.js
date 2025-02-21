import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import "../style/About.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:sumair.its@outlook.com?subject=Contact from Personal Site&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <Container maxWidth="sm" className="contact-container">
      <Paper elevation={3} className="contact-paper">
        <Typography variant="h4" className="contact-title">Contact Me</Typography>
        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField label="Your Name" name="name" variant="outlined" fullWidth margin="normal" required onChange={handleChange} />
          <TextField label="Your Email" name="email" type="email" variant="outlined" fullWidth margin="normal" required onChange={handleChange} />
          <TextField label="Your Message" name="message" multiline rows={4} variant="outlined" fullWidth margin="normal" required onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" className="contact-button">
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
