import { Flag, Guess } from "../types/interfaces";

type Props = {
  score: number;
  roundNumber: number;
  lastRound: number;
};

export function ScoreCard({ ...props }: Props) {
  const pc = props.score / props.lastRound;
  return (
    <div>
      <input type="range" min="0" max={props.lastRound} value={props.roundNumber} className="range range-info my-4" />
    </div>
  );
}
