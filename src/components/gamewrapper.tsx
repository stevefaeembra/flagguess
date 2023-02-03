import { Flag, GameData, Guess, Round } from "../types/interfaces";
import { FlagCard } from "./flagcard";
import { OptionsCard } from "./optionscard";
import { useMemo, useState } from "react";
import { checkAnswer } from "../utilities/flagdata";
import { NextButton } from "./nextbutton";
import { ScoreCard } from "./scorecard";

type Props = {
  game: GameData;
};

export function GameWrapper({ ...props }: Props) {
  const [userGuess, setUserGuess] = useState<Guess | undefined>();
  const [isDisabled, setIsDisabled] = useState(false);
  const [roundNumber, setRoundNumber] = useState(0);
  const currentRound = useMemo(() => props.game.rounds[roundNumber], [roundNumber]);
  const maxRound = props.game.rounds.length;
  const [score, setScore] = useState(0);

  const userChoseAnswer = (chosenAnswer: Flag) => {
    // click handler for answer button.
    const isCorrect = checkAnswer(currentRound, chosenAnswer.isocode);
    console.log(isCorrect ? "Correct!" : "Incorrect!");
    if (isCorrect) {
      setUserGuess({
        userGuessed: chosenAnswer,
        correct: true,
        correctAnswer: currentRound.answer,
      });
      setScore(score + 1);
    } else {
      setUserGuess({
        userGuessed: chosenAnswer,
        correct: false,
        correctAnswer: currentRound.answer,
      });
    }
    setIsDisabled(true);
  };

  const userClickedNext = () => {
    // click handler to advance to next round
    setIsDisabled(false);
    setUserGuess(undefined);
    setRoundNumber(roundNumber + 1);
  };

  return (
    <div>
      <FlagCard answer={currentRound?.answer} />
      <OptionsCard
        isDisabled={isDisabled}
        userGuess={userGuess}
        choices={currentRound?.choices}
        chooseAnswer={userChoseAnswer}
      />
      <ScoreCard score={score} roundNumber={roundNumber} lastRound={20} />
      <NextButton isDisabled={!isDisabled} onNextClick={userClickedNext} />
    </div>
  );
}
