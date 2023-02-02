import { Flag } from "../types/interfaces";

type Props = {
  choices: Flag[];
  chooseAnswer: Function;
  userGuess: Object;
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
          <button onClick={() => props.chooseAnswer(item)} key={`btn_${item.isocode}`} className={style}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
