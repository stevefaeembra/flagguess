import "./App.css";
import { FlagCard } from "./components/flagcard";
import { getRandomFlag } from "./utilities/flagdata";

function App() {
  const { isocode, name } = getRandomFlag();
  return (
    <>
      <div>
        <h1>Guess the flag</h1>
        <br />
      </div>
      <FlagCard isoCode={isocode} name={name} />
    </>
  );
}

export default App;
