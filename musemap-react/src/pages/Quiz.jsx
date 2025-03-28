import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Alert,
  LinearProgress,
} from '@mui/material';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Sample quiz data - replace with actual API call
  const quiz = {
    title: 'Museum Knowledge Quiz',
    questions: [
      {
        id: 1,
        question: 'Which museum is known for housing the Mona Lisa?',
        options: [
          'The Louvre',
          'The British Museum',
          'The Metropolitan Museum of Art',
          'The Vatican Museums',
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: 'What is the oldest museum in the world?',
        options: [
          'The British Museum',
          'The Louvre',
          'The Capitoline Museums',
          'The Hermitage Museum',
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: 'Which museum is home to the Terracotta Army?',
        options: [
          'The National Museum of China',
          'The Tokyo National Museum',
          'The National Palace Museum',
          'The Museum of Qin Terracotta Warriors',
        ],
        correctAnswer: 3,
      },
    ],
  };

  const handleAnswerSelect = (event) => {
    setAnswers({
      ...answers,
      [currentQuestion]: parseInt(event.target.value),
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    Object.keys(answers).forEach((questionIndex) => {
      if (answers[questionIndex] === quiz.questions[questionIndex].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / quiz.questions.length) * 100);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {quiz.title}
        </Typography>

        <Card>
          <CardContent>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mb: 3 }}
            />

            {!showResults ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </Typography>
                <Typography variant="body1" paragraph>
                  {quiz.questions[currentQuestion].question}
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    value={answers[currentQuestion] || ''}
                    onChange={handleAnswerSelect}
                  >
                    {quiz.questions[currentQuestion].options.map(
                      (option, index) => (
                        <FormControlLabel
                          key={index}
                          value={index}
                          control={<Radio />}
                          label={option}
                        />
                      )
                    )}
                  </RadioGroup>
                </FormControl>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === undefined}
                  >
                    {currentQuestion === quiz.questions.length - 1
                      ? 'Finish'
                      : 'Next'}
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h5" gutterBottom>
                  Quiz Complete!
                </Typography>
                <Alert severity={score >= 70 ? 'success' : 'warning'} sx={{ mb: 2 }}>
                  Your score: {score.toFixed(1)}%
                </Alert>
                <Button
                  variant="contained"
                  onClick={handleRestart}
                  sx={{ mt: 2 }}
                >
                  Try Again
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Quiz; 