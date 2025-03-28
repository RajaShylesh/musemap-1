import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'How do I book tickets for a museum?',
      answer: 'To book tickets, simply navigate to the museum\'s page, click on the "Book Tickets" button, and follow the booking process. You can select your preferred date and time, choose the number of tickets, and complete the payment process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Some museums may also accept cash payments at their ticket counter.',
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 24 hours before your scheduled visit. Simply go to your dashboard, find the booking, and use the "Modify" or "Cancel" option. Please note that cancellation fees may apply depending on the museum\'s policy.',
    },
    {
      question: 'Do you offer guided tours?',
      answer: 'Yes, many museums offer guided tours. You can book a guided tour during the ticket booking process. Tours are available in multiple languages and are led by experienced museum guides.',
    },
    {
      question: 'What are the opening hours?',
      answer: 'Opening hours vary by museum. You can find the specific opening hours on each museum\'s page. Most museums are open from 9:00 AM to 5:00 PM, with some having extended hours on certain days.',
    },
    {
      question: 'Is there a discount for students or seniors?',
      answer: 'Yes, many museums offer discounted rates for students and seniors. You can find information about available discounts on each museum\'s page. Valid ID may be required to claim these discounts.',
    },
    {
      question: 'How do I get to the museum?',
      answer: 'Each museum page includes detailed information about transportation options, including public transit, parking, and accessibility information. You can also use the map feature to get directions.',
    },
    {
      question: 'What should I bring with me?',
      answer: 'Please bring your booking confirmation (digital or printed), a valid ID, and any necessary student or senior cards for discounts. Some museums may have specific requirements for bags or photography equipment.',
    },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 1 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ; 