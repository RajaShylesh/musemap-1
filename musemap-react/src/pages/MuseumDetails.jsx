import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccessTime,
  LocationOn,
  Phone,
  Email,
  Language,
  Description,
} from '@mui/icons-material';

const MuseumDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample museum data - replace with actual API call
  const museum = {
    id: parseInt(id),
    name: 'National Museum',
    description: 'The National Museum is a premier cultural institution dedicated to preserving and showcasing the rich heritage of our nation. With over 100,000 artifacts spanning centuries of history, visitors can explore diverse collections including ancient artifacts, historical documents, and contemporary art pieces.',
    images: [
      '/assets/museum1.jpg',
      '/assets/museum2.jpg',
      '/assets/museum3.jpg',
    ],
    rating: 4.5,
    openingHours: '9:00 AM - 5:00 PM',
    address: '123 Museum Street, City, Country',
    phone: '+1 234 567 8900',
    email: 'info@nationalmuseum.com',
    website: 'www.nationalmuseum.com',
    exhibits: [
      'Ancient History Gallery',
      'Modern Art Collection',
      'Science and Technology Wing',
      'Cultural Heritage Section',
    ],
    admissionFee: '$15',
  };

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => navigate('/museums')}
        sx={{ mb: 3 }}
      >
        Back to Museums
      </Button>

      <Grid container spacing={4}>
        {/* Main Image */}
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={museum.images[0]}
              alt={museum.name}
            />
          </Card>
        </Grid>

        {/* Museum Information */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            {museum.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={museum.rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({museum.rating}/5)
            </Typography>
          </Box>

          <Typography variant="body1" paragraph>
            {museum.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Current Exhibits
          </Typography>
          <List>
            {museum.exhibits.map((exhibit, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText primary={exhibit} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Museum Details Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Museum Information
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccessTime />
                  </ListItemIcon>
                  <ListItemText
                    primary="Opening Hours"
                    secondary={museum.openingHours}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText
                    primary="Address"
                    secondary={museum.address}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary={museum.phone}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={museum.email}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText
                    primary="Website"
                    secondary={museum.website}
                  />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Admission Fee: {museum.admissionFee}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate('/booking')}
                sx={{ mt: 2 }}
              >
                Book Tickets
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MuseumDetails; 