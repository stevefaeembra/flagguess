import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { getOptions, getRandomFlag } from "./utilities/flagdata";

function App() {
  const [isoAnswer, setIsoAnswer] = useState("");
  const [nameAnswer, setNameAnswer] = useState("");
  const randomFlag = useCallback(() => getRandomFlag(), []);
  const [options, setOptions] = useState([{}]);

  const { isocode: i, name: n } = randomFlag();

  useEffect(() => {
    console.log("in useEffect1");
    setIsoAnswer(i);
    setNameAnswer(n);
    console.log(`Current flag ${i} ${n}`);
  }, [setIsoAnswer, setNameAnswer, randomFlag]);

  useEffect(() => {
    console.log("in useEffect2");
    setOptions(
      getOptions({
        isocode: isoAnswer,
        name: nameAnswer,
      })
    );
  }, [isoAnswer, nameAnswer, getOptions, setOptions]);

  return (
    <div>
      <div>
        <h1>Guess the flag</h1>
        <br />
      </div>
      <FlagCard isoCode={isoAnswer} name={nameAnswer} />
      <OptionsCard choices={options} />
    </div>
  );
}

export default App;
