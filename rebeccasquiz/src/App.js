import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
        "Hyperlink Text Management Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },

    {
      question: "Which language runs in a web browser",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript",
    },

    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Syntax",
        "Cascading Style Sheets",
        "Colorful Style Structure",
      ],
      correctAnswer: "Cascading Style Sheets",
    },

    {
      question: "Which of these is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      correctAnswer: "React",
    },

    {
      question: "What symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctAnswer: "//",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      correctAnswer: "Facebook",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Applied Programming Internet",
        "Advanced Programming Integration",
        "Application Protocol Interface",
      ],
      correctAnswer: "Application Programming Interface",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <h1>Coding quiz</h1>
      <h3>
        Question: {currentQuestion + 1} of {questions.legnth}
      </h3>
    </div>
  );
}

export default App;
