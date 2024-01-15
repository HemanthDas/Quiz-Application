import React from "react";

interface ExamQuestions {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface ExamQuestionProps {
  q: ExamQuestions;
  onAnswerSelect: (selectedAnswer: string) => void;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ q, onAnswerSelect }) => {
  const handleAnswerSelection = (selectedAnswer: string) => {
    onAnswerSelect(selectedAnswer);
  };

  return (
    <>
      <h1>{q.question}</h1>
      <div>
        {q.answers.map((answer) => (
          <div key={answer} className="options">
            <input
              type="radio"
              name={q.id}
              id={answer + q.id}
              onChange={() => handleAnswerSelection(answer)}
            ></input>
            <label htmlFor={answer + q.id}>{answer}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExamQuestion;
