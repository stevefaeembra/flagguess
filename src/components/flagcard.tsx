import React from "react";

type Props = {
  answer: any;
};

export function FlagCard({ ...props }: Props) {
  const fileName = `/flags/${props.answer.isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={fileName} alt="Flag" />
      </figure>
      <div className="card-body">
        <span className="font-bold">{`${props.answer.name}`}</span>
      </div>
    </div>
  );
}
