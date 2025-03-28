import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, TextField, Container } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Museums = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample museum data - replace with actual API call
  const museums = [
    {
      id: 1,
      name: 'National Museum',
      description: 'Explore the rich cultural heritage of our nation.',
      location: [40.7128, -74.0060],
      rating: 4.5,
      openingHours: '9:00 AM - 5:00 PM',
    },
    {
      id: 2,
      name: 'Art Gallery',
      description: 'Discover contemporary and classical artworks.',
      location: [40.7589, -73.9851],
      rating: 4.2,
      openingHours: '10:00 AM - 6:00 PM',
    },
    {
      id: 3,
      name: 'Science Center',
      description: 'Interactive exhibits for curious minds.',
      location: [40.7614, -73.9776],
      rating: 4.8,
      openingHours: '9:30 AM - 5:30 PM',
    },
  ];

  const filteredMuseums = museums.filter(museum =>
    museum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    museum.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Museums
      </Typography>
      
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search museums..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={4}>
        {/* Map Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ height: '600px', width: '100%' }}>
            <MapContainer
              center={[40.7128, -74.0060]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredMuseums.map((museum) => (
                <Marker key={museum.id} position={museum.location}>
                  <Popup>
                    <Typography variant="h6">{museum.name}</Typography>
                    <Typography variant="body2">{museum.description}</Typography>
                    <Typography variant="body2">Rating: {museum.rating}/5</Typography>
                    <Typography variant="body2">Hours: {museum.openingHours}</Typography>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>
        </Grid>

        {/* Museum List Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '600px', overflowY: 'auto' }}>
            {filteredMuseums.map((museum) => (
              <Card key={museum.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {museum.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {museum.description}
                  </Typography>
                  <Typography variant="body2">
                    Rating: {museum.rating}/5
                  </Typography>
                  <Typography variant="body2">
                    Opening Hours: {museum.openingHours}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Museums; 