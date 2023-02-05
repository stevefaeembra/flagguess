import { Flag, Guess } from "../types/interfaces";

type Props = {
  choices: Flag[] | undefined;
  chooseAnswer: Function;
  userGuess: Guess | undefined;
  isDisabled: boolean;
};

export function OptionsCard({ ...props }: Props) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {props?.choices?.map((item) => {
        let style = "btn";
        if (props.userGuess) {
          // player has guessed...
          if (props?.userGuess?.correct && props?.userGuess?.correctAnswer) {
            // correct, just highlight correct
            style = item.isocode === props?.userGuess?.correctAnswer?.isocode ? "btn-success" : style;
          } else {
            // incorrect, highlight correct and (selected) incorrect
            style = item.isocode === props?.userGuess?.correctAnswer?.isocode ? "btn-success" : style;
            style = item.isocode === props?.userGuess?.userGuessed?.isocode ? "btn-error" : style;
          }
        }
        return (
          <button
            disabled={props.isDisabled}
            onClick={() => props.chooseAnswer(item)}
            key={`btn_${item.isocode}`}
            className={style}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
