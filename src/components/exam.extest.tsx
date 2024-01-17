import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import ExamQuestion from "./examQuestion";
import hasher from "./hasher";
import { AuthContext } from "../context/authcontext";
interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizData {
  questions: Question[];
}

const ExTest: React.FC<{ id: string; type: string }> = ({ id, type }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/exam/${type}/${id}`
        );
        const data: QuizData = await response.json();
        setQuestions(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getQuestions();
  }, [id]);

  const handleAnswerSelection = (
    questionId: string,
    selectedAnswer: string
  ) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };
  const sendToDatabase = async ({ score }: { score: string }) => {
    const res = await fetch("http://localhost:3000/api/exam/result", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${user.user}`,
      },
      body: JSON.stringify({ score, subject: id }),
    });
    const data = await res.json();

    alert(data.message);
  };
  const handleSubmit = () => {
    localStorage.setItem("ex-status", "end");
    const correctAnswersCount = questions?.questions.reduce((count, q) => {
      const selectedAnswer = selectedAnswers[q.id];
      return count + (selectedAnswer === q.correctAnswer ? 1 : 0);
    }, 0);
    const result =
      ((correctAnswersCount ? correctAnswersCount : 0) /
        questions!.questions.length) *
      100;
    alert(`Your score is ${result}%`);
    sendToDatabase({ score: result.toString() });
    navigate({
      to: `/exam/${id}/result`,
      replace: true,
      search: { result: hasher(result.toString(), true) },
    });
  };

  return loading ? (
    <div>Hello</div>
  ) : (
    <>
      {questions?.questions ? (
        questions.questions.map((q) => (
          <div key={q.id} className="question">
            <ExamQuestion
              q={q}
              onAnswerSelect={(selectedAnswer) =>
                handleAnswerSelection(q.id, selectedAnswer)
              }
            />
          </div>
        ))
      ) : (
        <div>No questions available</div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ExTest;
