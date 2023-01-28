import { useEffect, useState } from "react";
import "./App.css";
import { FlagCard } from "./components/flagcard";
import { getRandomFlag } from "./utilities/flagdata";

function App() {
  const [isoCode, setIsoCode] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const { isocode, name } = getRandomFlag();
    setIsoCode(isocode);
    setName(name);
    console.log(`Current flag ${isocode} ${name}`);
  }, [setIsoCode, setName, getRandomFlag]);

  return (
    <>
      <div>
        <h1>Guess the flag</h1>
        <br />
      </div>
      <FlagCard isoCode={isoCode} name={name} />
    </>
  );
}

export default App;
