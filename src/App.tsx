import "./App.css";

import { useMemo, useState } from "react";
import { getGame } from "./utilities/flagdata";
import { GameWrapper } from "./components/gamewrapper";

export function App() {
  const game = useMemo(() => {
    // generate a random game of 20 flags
    const myGame = getGame(10);
    return myGame;
  }, [getGame]);

  const triggerNewGame = () => {
    location.reload();
  };

  return (
    <div className="container grid mx-auto my-auto">
      <div className="card mx-auto">
        <GameWrapper game={game} onNewGame={triggerNewGame} />
      </div>
    </div>
  );
}
