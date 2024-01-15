import React, { useEffect, useState } from "react";

interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizData {
  questions: Question[];
}

const ExTest: React.FC<{ id: string }> = ({ id }) => {
  const [questions, setQuestions] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/exam/${id}`);
        const data: QuizData = await response.json();
        setQuestions(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getQuestions();
  }, [id]);

  return loading ? (
    <div>Hello</div>
  ) : (
    <div>
      {questions?.questions ? (
        questions.questions.map((q) => (
          <div key={q.id}>
            <h1>{q.question}</h1>
            <div>
              {q.answers.map((answer) => (
                <div key={answer}>
                  <input type="radio" name={q.id} id={answer} />
                  <label htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>No questions available</div>
      )}
    </div>
  );
};

export default ExTest;
