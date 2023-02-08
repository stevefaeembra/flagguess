type Props = {
  numberRight: number;
  numberRounds: number;
  onNewGameClick: Function;
};

export function FinalScore({ ...props }: Props) {
  const percent = parseInt(((props.numberRight / props.numberRounds) * 100).toFixed(0));
  let result = "";
  percent === 100
    ? (result = "Perfection!")
    : percent > 90
    ? (result = "Excellent!")
    : percent > 80
    ? (result = "Superb!")
    : percent > 60
    ? (result = "Great!")
    : (result = "Good Game!");
  return (
    <>
      <div className="mt-6">
        <h1>Game over!</h1>
      </div>
      <div className="mt-6">
        <h1>
          {props.numberRight} / {props.numberRounds}
        </h1>
        <h1 className="text-red-900">{percent}%</h1>
        <h1>{result}</h1>
      </div>
      <div className="mt-6">
        <button onClick={() => props.onNewGameClick()} className="btn btn-block">
          New game!
        </button>
      </div>
    </>
  );
}
