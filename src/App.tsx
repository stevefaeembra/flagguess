import "./App.css";

import { useEffect, useMemo, useState } from "react";
import { FlagCard } from "./components/flagcard";
import { OptionsCard } from "./components/optionscard";
import { checkAnswer, getGame } from "./utilities/flagdata";
import { Round } from "./types/interfaces";

export function App() {
  const [userGuess, setUserGuess] = useState({});

  const game = useMemo(() => {
    const myGame = getGame(20);
    return myGame;
  }, [getGame]);

  const currentRound: Round = useMemo(() => {
    const thisRound = game.rounds[parseInt(game.roundNumber.toString())];
    return thisRound;
  }, [game]);

  const userChoseAnswer = (chosenIsocode: string) => {
    // click handler for answer button.
    const isCorrect = checkAnswer(currentRound, chosenIsocode);
    console.log(isCorrect ? "Correct!" : "Incorrect!");
    if (isCorrect) {
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
