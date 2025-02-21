import React from "react";
import { Container, Typography, Paper, Avatar, Button } from "@mui/material";
import profileImage from '../assets/profile.jpeg'; // Adjust the path as needed

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Avatar
          alt="Muhammad Sumair"
          src={profileImage} 
          sx={{ width: 100, height: 100, margin: "auto" }}
        />
        <Typography variant="h4" gutterBottom>
          Muhammad Sumair
        </Typography>
        <Typography variant="h6" gutterBottom>
          Web & React JS Developer
        </Typography>
        <Typography>Email: sumair.its@outlook.com | Phone: +92-307-7584367</Typography>
        <Typography>Location: Pakistan</Typography>
        
        <Button variant="contained" color="primary" onClick={handlePrint} style={{ marginTop: "20px" }}>
          Print CV
        </Button>
        
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Objective
        </Typography>
        <Typography>
          Seeking a React JS Developer position in a company with growth opportunities.
        </Typography>
        
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Experience
        </Typography>
        <Typography>Web Surfing & Online Work</Typography>
        <Typography>Work on React JS development.</Typography>
        
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Education
        </Typography>
        <Typography>
          <strong>BS IT</strong> - Ghazi University, Dera Ghazi Khan (CGPA: 3.25) - 2022
        </Typography>
        <Typography>
          <strong>Intermediate</strong> - GHSS Mana Ahmadani (766/1100) - 2018 
        </Typography>
        <Typography>
          <strong>Matric</strong> - Jinnah Public School and Science Academy (769/1100) - 2015
        </Typography>
        
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Skills
        </Typography>
        <Typography>
          Proficient in React JS and modern web development.
        </Typography>
        <Typography>
          Strong understanding of JavaScript, HTML, CSS, and Material-UI.
        </Typography>
        <Typography>
          Experience in working with REST APIs and state management.
        </Typography>
      </Paper>
    </Container>
  );
};

export default CV;
