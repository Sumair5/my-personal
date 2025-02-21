import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import profileImage from '../assets/profile.jpeg'; // Adjust the path as needed

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "40px 0" }}>
      <Avatar
        src={profileImage}
        alt="Profile Picture"
        sx={{ width: 120, height: 120, margin: "auto" }}
      />
      <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Muhammad Sumair
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Frontend Developer | React.js Enthusiast
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        href="#contact"
      >
        Hire Me
      </Button>

      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Projects</Typography>
              <Typography color="textSecondary">
                View my latest work and contributions.
              </Typography>
              <Button size="small" href="#projects">Explore</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Skills</Typography>
              <Typography color="textSecondary">
                Expertise in React, JavaScript, and more.
              </Typography>
              <Button size="small" href="#skills">See More</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Contact</Typography>
              <Typography color="textSecondary">
                Get in touch for work and collaborations.
              </Typography>
              <Button size="small" href="#contact">Reach Out</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
        <Button href="https://github.com/" target="_blank" startIcon={<GitHub />}>
          GitHub
        </Button>
        <Button href="https://linkedin.com/" target="_blank" startIcon={<LinkedIn />}>
          LinkedIn
        </Button>
        <Button href="mailto:email@example.com" startIcon={<Email />}>
          Email
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;
