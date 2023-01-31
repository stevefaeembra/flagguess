import React from "react";
import { Flag } from "../types/interfaces";

type Props = {
  answer: Flag;
};

export function FlagCard({ ...props }: Props) {
  const fileName = `/flags/${props.answer.isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto w-96 h-64 mt-24 bg-base-100">
      <figure>
        <img className="object-fill h-48 w-96 shadow-xl" src={fileName} alt="Flag" />
      </figure>
      {/* <div className="">
        <span className="font-bold">{`${props.answer.name}`}</span>
      </div> */}
    </div>
  );
}
