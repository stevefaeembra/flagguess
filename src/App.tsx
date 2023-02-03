import "./App.css";

import { useEffect, useMemo, useState } from "react";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { checkAnswer, getGame } from "./utilities/flagdata";
import { Flag, Guess, Round } from "./types/interfaces";
import { GameWrapper } from "./components/gamewrapper";

export function App() {
  const game = useMemo(() => {
    const myGame = getGame(20);
    return myGame;
  }, [getGame]);

  return (
    <div className="container grid mx-auto my-auto">
      <div className="card mx-auto">
        <GameWrapper game={game} />
      </div>
    </div>
  );
}
