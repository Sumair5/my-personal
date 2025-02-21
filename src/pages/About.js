import React from "react";
import { Container, Typography, Paper, Avatar } from "@mui/material";
import "../style/About.css";
import profileImage from "../assets/profile.jpeg"; // Adjust the path as needed

const About = () => {
  return (
    <Container maxWidth="md" className="about-container">
      <Paper elevation={3} className="about-paper">
        <Avatar
          alt="Muhammad Sumair"
          src={profileImage}
          sx={{ width: 120, height: 120, margin: "auto" }}
        />
        <Typography variant="h4" className="about-title">About Me</Typography>
        <Typography variant="body1" className="about-text">
          Hi, I'm <strong>Muhammad Sumair</strong>, a passionate React JS Developer. I love creating modern and efficient web applications using React, JavaScript, and Material-UI.
        </Typography>
        <Typography variant="body1" className="about-text">
          I am always eager to learn new technologies and improve my skills. My goal is to develop high-quality and user-friendly web applications.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
