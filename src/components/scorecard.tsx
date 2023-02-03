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
      <h3>
        Round {props.roundNumber + 1} / {props.lastRound}
      </h3>
      <h3>
        {/* Score : {props.score}/ {props.lastRound} */}
        Score: {parseInt(props.score)}
      </h3>
      <progress value={(props.score / props.lastRound) * 100} max="100"></progress>
    </div>
  );
}
