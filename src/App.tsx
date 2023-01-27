import "./App.css";
import { FlagCard } from "./components/flagcard";

function App() {
  return (
    <>
      <div>
        <h1>Flag guessing Game</h1>
        <br />
      </div>
      <FlagCard showRandom={true} isoCode="US" />
    </>
  );
}

export default App;
