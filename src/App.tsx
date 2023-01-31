import "./App.css";

import { useEffect, useMemo, useState } from "react";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { checkAnswer, getGame } from "./utilities/flagdata";
import { Round } from "./types/interfaces";

export function App() {
  const [userGuess, setUserGuess] = useState({});

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

  const userChoseAnswer = (chosenIsocode: string) => {
    // click handler for answer button.
    // is it correct? XXX
    console.log("CURRENT ROUND", currentRound);
    console.log("CHOSE ISOCODE", chosenIsocode);
    if (checkAnswer(currentRound, chosenIsocode)) {
      setUserGuess({
        correctAnswer: currentRound.answer,
      });
    } else {
      setUserGuess({
        incorrectAnswer: currentRound.answer,
      });
    }
  };

  return currentRound ? (
    <div className="container grid mx-auto my-auto">
      <div className="card mx-auto">
        <FlagCard answer={currentRound.answer} />
        <OptionsCard choices={currentRound.choices} chooseAnswer={userChoseAnswer} />
      </div>
    </div>
  ) : null;
}
