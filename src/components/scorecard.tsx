import { Flag, Guess } from "../types/interfaces";

type Props = {
  roundNumber: number;
  lastRound: number;
};

export function ScoreCard({ ...props }: Props) {
  return (
    <div>
      <h1>
        Round {props.roundNumber + 1} / {props.lastRound}
      </h1>
    </div>
  );
}
