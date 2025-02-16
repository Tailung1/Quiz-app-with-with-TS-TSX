import React, { useState } from "react";
import data from "../data.json";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const Question = data[currentIndex].question;
  const Options = data[currentIndex].options;
  const CorrectAnswer = data[currentIndex].correctAnswer;
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const check = (selectedOption: string) => {
    selectedOption === CorrectAnswer ? setScore(score + 1) : null;
    const indexIndicator = currentIndex + 1;
    if (indexIndicator < data.length) {
      setCurrentIndex(indexIndicator);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <p>{score}</p>
      ) : (
        <div>
          {" "}
          <h1>{Question}</h1>
          <ul>
            {Options.map((option) => (
              <li onClick={() => check(option)} key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
