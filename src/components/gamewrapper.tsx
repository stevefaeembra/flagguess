import { Flag, GameData, Guess, Round } from "../types/interfaces";
import { FlagCard } from "./flagcard";
import { OptionsCard } from "./optionscard";
import { useMemo, useState } from "react";
import { checkAnswer } from "../utilities/flagdata";

type Props = {
  game: GameData;
};

export function GameWrapper({ ...props }: Props) {
  const [userGuess, setUserGuess] = useState<Guess | undefined>();

  const currentRound: Round = useMemo(() => {
    const thisRound = props.game.rounds[parseInt(props.game.roundNumber.toString())];
    return thisRound;
  }, [props.game]);

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
    } else {
      setUserGuess({
        userGuessed: chosenAnswer,
        correct: false,
        correctAnswer: currentRound.answer,
      });
    }
  };

  return (
    <div>
      <FlagCard answer={currentRound.answer} />
      <OptionsCard userGuess={userGuess} choices={currentRound.choices} chooseAnswer={userChoseAnswer} />
    </div>
  );
}
