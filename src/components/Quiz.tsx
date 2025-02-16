import { useState } from "react";
import data from "../data.json";
import Question from "./Question";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const question = data[currentQuestionIndex].question;
  const options = data[currentQuestionIndex].options;
  const correctAnswer = data[currentQuestionIndex].correctAnswer;

  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  function onSelectOption(selectedOption: string) {
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < data.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  }
  return (
    <div>
      {showScore ? (
        <h1>
          Your Score :{score}/{data.length}
        </h1>
      ) : (
        <Question
          question={data[currentQuestionIndex].question}
          options={data[currentQuestionIndex].options}
          onSelectOption={onSelectOption}
        />
      )}
    </div>
  );
}
