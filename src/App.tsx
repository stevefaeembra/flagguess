import "./App.css";

import { useEffect, useMemo, useState } from "react";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { getChoices, getRandomFlag } from "./utilities/flagdata";

function App() {
  const [options, setOptions] = useState([{}]);

  const correctAnswer = useMemo(() => getRandomFlag(), []);
  console.log(`Correct Answer: ${correctAnswer.name} ${correctAnswer.isocode}`);

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
      <FlagCard answer={correctAnswer} />
      <OptionsCard choices={options} />
    </div>
  );
}

export default App;
