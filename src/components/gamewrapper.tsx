import { Flag, GameData, Guess, Round } from "../types/interfaces";
import { FlagCard } from "./flagcard";
import { OptionsCard } from "./optionscard";
import { useMemo, useState } from "react";
import { checkAnswer } from "../utilities/flagdata";
import { NextButton } from "./nextbutton";
import { ScoreCard } from "./scorecard";
import { FinalScore } from "./finalscore";

type Props = {
  game: GameData;
  onNewGame: Function;
};

export function GameWrapper({ ...props }: Props) {
  const [userGuess, setUserGuess] = useState<Guess | undefined>();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [roundNumber, setRoundNumber] = useState(0);
  const currentRound = useMemo(() => {
    if (roundNumber < props.game.rounds.length) {
      return props.game.rounds[roundNumber];
    } else {
      setIsGameOver(true);
      return {};
    }
  }, [roundNumber]);
  const maxRound = props.game.rounds.length;
  const [score, setScore] = useState(0);

  const userChoseAnswer = (chosenAnswer: Flag) => {
    // click handler for answer button.
    const isCorrect = checkAnswer(currentRound, chosenAnswer.isocode);
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

  return !isGameOver ? (
    <>
      <FlagCard answer={currentRound?.answer} />
      <OptionsCard
        isDisabled={isDisabled}
        userGuess={userGuess}
        choices={currentRound?.choices}
        chooseAnswer={userChoseAnswer}
      />
      <ScoreCard score={score} roundNumber={roundNumber} lastRound={maxRound} />
      <NextButton isDisabled={!isDisabled} onNextClick={userClickedNext} />
    </>
  ) : (
    <FinalScore numberRight={score} numberRounds={maxRound} onNewGameClick={props.onNewGame} />
  );
}
