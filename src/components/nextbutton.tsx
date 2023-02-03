type Props = {
  onNextClick: Function;
  isDisabled: boolean;
};

export function NextButton({ ...props }: Props) {
  return props.isDisabled ? null : (
    <div className="mt-6">
      <button onClick={() => props.onNextClick()} className="btn btn-block">
        Next Flag!
      </button>
    </div>
  );
}
