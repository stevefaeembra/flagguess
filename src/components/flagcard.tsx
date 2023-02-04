import { Flag } from "../types/interfaces";

type Props = {
  answer: Flag;
};

export function FlagCard({ ...props }: Props) {
  // flag display component
  const fileName = `/flags/${props.answer.isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto my-auto w-96 mt-24 bg-base-100">
      <h1>Guess the flag</h1>
      <figure>
        <img className="object-fill h-48 w-96 shadow-2xl" src={fileName} alt="Flag" />
      </figure>
    </div>
  );
}
