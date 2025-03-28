import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from '@mui/material';
import {
  Person,
  CalendarToday,
  Museum,
  History,
  Settings,
} from '@mui/icons-material';

const Dashboard = () => {
  // Sample user data - replace with actual API call
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bookings: [
      {
        id: 1,
        museum: 'National Museum',
        date: '2024-04-01',
        time: '10:00 AM',
        status: 'Confirmed',
      },
      {
        id: 2,
        museum: 'Art Gallery',
        date: '2024-04-15',
        time: '2:00 PM',
        status: 'Pending',
      },
    ],
    visitedMuseums: [
      'Science Center',
      'History Museum',
      'Modern Art Gallery',
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user.firstName}!
        </Typography>

        <Grid container spacing={3}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Person sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<Settings />}
                  fullWidth
                >
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Upcoming Bookings */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Bookings
                </Typography>
                <List>
                  {user.bookings.map((booking) => (
                    <React.Fragment key={booking.id}>
                      <ListItem>
                        <ListItemIcon>
                          <CalendarToday />
                        </ListItemIcon>
                        <ListItemText
                          primary={booking.museum}
                          secondary={`${booking.date} at ${booking.time}`}
                        />
                        <Typography
                          color={booking.status === 'Confirmed' ? 'success.main' : 'warning.main'}
                        >
                          {booking.status}
                        </Typography>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
                <Button
                  variant="contained"
                  startIcon={<Museum />}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Book New Visit
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Visited Museums */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Visited Museums
                </Typography>
                <List>
                  {user.visitedMuseums.map((museum, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <History />
                        </ListItemIcon>
                        <ListItemText primary={museum} />
                      </ListItem>
                      {index < user.visitedMuseums.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 