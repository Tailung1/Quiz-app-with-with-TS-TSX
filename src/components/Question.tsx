interface IQuestInfo {
  question: string;
  options: string[];
  onSelectOption: (option: string) => void;
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
          <button key={option}>
            <li onClick={() => onSelectOption(option)}>{option}</li>
          </button>
        ))}
      </ul>
    </div>
  );
};
export default Question