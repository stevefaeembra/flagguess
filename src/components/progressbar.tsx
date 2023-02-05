import { Flag, Guess } from "../types/interfaces";

type Props = {
  roundNumber: number;
  lastRound: number;
};

export function ProgressBar({ ...props }: Props) {
  const pc = parseInt(((props.roundNumber / props.lastRound) * 100).toString());
  return (
    <div>
      <progress className="progress w-100" value={pc} max="100"></progress>
    </div>
  );
}
