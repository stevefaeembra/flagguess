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
        Score: {pc}
      </h3>
    </div>
  );
}
