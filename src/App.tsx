import "./App.css";

import { useEffect, useMemo, useState } from "react";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { getGame } from "./utilities/flagdata";
import { Round } from "./types/interfaces";

function App() {
  const game = useMemo(() => {
    console.log("useMemo");
    const myGame = getGame(20);
    console.log("Game rounds", myGame);
    return myGame;
  }, []);

  const currentRound: Round = useMemo(() => {
    console.log("useMemo currentRound");
    const thisRound = game.rounds[parseInt(game.roundNumber.toString())];
    console.log(`Round answer: ${thisRound.answer.name} ${thisRound.answer.isocode}`);
    return thisRound;
  }, [game]);

  return currentRound ? (
    <div className="container grid mx-auto my-auto">
      <FlagCard answer={currentRound.answer} />
      <OptionsCard choices={currentRound.choices} />
    </div>
  ) : null;
}

export default App;
