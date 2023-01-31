import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { getChoices, getRandomFlag } from "./utilities/flagdata";

function App() {
  const [answer, setAnswer] = useState({});
  const [options, setOptions] = useState([{}]);

  const correctAnswer = useMemo(() => getRandomFlag(), []);

  useEffect(() => {
    setAnswer(correctAnswer);
    console.log(`Correct Answer: ${correctAnswer.name} ${correctAnswer.isocode}`);
  }, [correctAnswer, setAnswer]);

  useEffect(() => {
    setOptions(
      getChoices({
        isocode: correctAnswer.isocode,
        name: correctAnswer.name,
      })
    );
  }, [correctAnswer, getChoices, setOptions]);

  return (
    <div className="container grid mx-auto my-auto">
      <div>
        {/* <h1>Guess the flag</h1> */}
        <br />
      </div>
      <FlagCard answer={correctAnswer} />
      <OptionsCard choices={options} />
    </div>
  );
}

export default App;
