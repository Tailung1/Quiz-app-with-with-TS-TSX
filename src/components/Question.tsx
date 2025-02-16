interface IQuestInfo {
  question: string;
  options: string[];
  onSelectOption: (selectedOption: string) => void;
}

const Question: React.FC<IQuestInfo> = ({
  question,
  options,
  onSelectOption,
}) => {
  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {options.map((option) => (
          <li key={option}>
            {" "}
            <button onClick={() => onSelectOption(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Question;
