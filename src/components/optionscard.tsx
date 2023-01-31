import { Flag } from "../types/interfaces";

type Props = {
  choices: Flag[];
  chooseAnswer: Function;
};

export function OptionsCard({ ...props }: Props) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {props?.choices?.map((item) => (
        <button onClick={() => props.chooseAnswer(item.isocode)} key={`btn_${item.isocode}`} className="btn">
          {item.name}
        </button>
      ))}
    </div>
  );
}
