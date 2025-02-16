import { useState } from "react";
import data from "../data.json";
import Question from "./Question";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const question = data[currentIndex].question;
  const options = data[currentIndex].options;
//   const CorrectAnswer = data[currentIndex].correctAnswer;
//   const [score, setScore] = useState<number>(0);
//   const [showScore, setShowScore] = useState<boolean>(false);

  function onSelectOption(option:string) {
    console.log(option)
  }
  return (
    <div>
      <Question
        question={data[currentIndex].question}
        options={data[currentIndex].options}
        onSelectOption={onSelectOption}
      />
    </div>
  );
}
