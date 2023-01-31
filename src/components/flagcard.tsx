import React from "react";
import { Flag } from "../types/interfaces";

type Props = {
  answer: Flag;
};

export function FlagCard({ ...props }: Props) {
  const fileName = `/flags/${props.answer.isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={fileName} alt="Flag" />
      </figure>
      <div className="card-body">
        <span className="font-bold">{`${props.answer.name}`}</span>
      </div>
    </div>
  );
}
