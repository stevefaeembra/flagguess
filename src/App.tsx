import "./App.css";

import { useMemo } from "react";
import { getGame } from "./utilities/flagdata";
import { GameWrapper } from "./components/gamewrapper";

export function App() {
  const game = useMemo(() => {
    // generate a random game of 20 flags
    const myGame = getGame(20);
    console.log("New game!", myGame);
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
