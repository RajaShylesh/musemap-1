import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const featuredMuseums = [
    {
      id: 1,
      name: 'National Museum',
      image: 'https://source.unsplash.com/800x600/?museum',
      description: 'Explore the rich cultural heritage of our nation.'
    },
    {
      id: 2,
      name: 'Art Gallery',
      image: 'https://source.unsplash.com/800x600/?art',
      description: 'Discover contemporary and classical artworks.'
    },
    {
      id: 3,
      name: 'Science Center',
      image: 'https://source.unsplash.com/800x600/?science',
      description: 'Interactive exhibits for curious minds.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
          borderRadius: '10px',
          backgroundImage: 'linear-gradient(45deg, #f16322, #FF6A00)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 3
            }}
          >
            Welcome to MuseMap
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Your Gateway to Cultural Exploration
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/museums')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Explore Museums
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Museums */}
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 6
          }}
        >
          Featured Museums
        </Typography>
        <Grid container spacing={4}>
          {featuredMuseums.map((museum) => (
            <Grid item key={museum.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={museum.image}
                  alt={museum.name}
                  sx={{
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {museum.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {museum.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(`/museums/${museum.id}`)}
                    sx={{
                      width: '100%',
                      mt: 'auto'
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 