import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About MuseMap
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            MuseMap is dedicated to making cultural exploration accessible to everyone. 
            We believe that museums are gateways to understanding our past, present, and future. 
            Our platform connects visitors with museums, making it easier than ever to discover 
            and explore the rich cultural heritage around us.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            What We Offer
          </Typography>
          <Typography variant="body1" paragraph>
            • Interactive museum maps and location services
          </Typography>
          <Typography variant="body1" paragraph>
            • Detailed information about exhibitions and collections
          </Typography>
          <Typography variant="body1" paragraph>
            • Easy booking and ticket reservation system
          </Typography>
          <Typography variant="body1" paragraph>
            • User reviews and ratings
          </Typography>
          <Typography variant="body1" paragraph>
            • Educational resources and guided tours
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            We envision a world where cultural institutions are easily accessible to all. 
            Through technology and innovation, we're breaking down barriers and creating 
            bridges between museums and visitors, fostering a deeper appreciation for art, 
            history, and culture.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 