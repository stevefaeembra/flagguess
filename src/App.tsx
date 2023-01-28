import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { FlagCard } from "./components/flagcard";
import { getRandomFlag } from "./utilities/flagdata";

function App() {
  const [isoAnswer, setIsoAnswer] = useState("");
  const [nameAnswer, setNameAnswer] = useState("");
  const randomFlag = useCallback(() => getRandomFlag(), []);

  const { isocode: i, name: n } = randomFlag();

  useEffect(() => {
    setIsoAnswer(i);
    setNameAnswer(n);
    console.log(`Current flag ${i} ${n}`);
  }, [setIsoAnswer, setNameAnswer, randomFlag]);

  return (
    <>
      <div>
        <h1>Guess the flag</h1>
        <br />
      </div>
      <FlagCard isoCode={isoAnswer} name={nameAnswer} />
    </>
  );
}

export default App;
