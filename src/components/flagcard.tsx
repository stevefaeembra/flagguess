import { Flag } from "../types/interfaces";

type Props = {
  answer: Flag;
};

export function FlagCard({ ...props }: Props) {
  // flag display component
  const fileName = `/flags/${props.answer.isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto w-96 mt-24 bg-base-100">
      <figure>
        <img className="object-fill h-48 w-96 shadow-2xl" src={fileName} alt="Flag" />
      </figure>
    </div>
  );
}
