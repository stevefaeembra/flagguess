import React from "react";
import { getRandomFlag } from "../utilities/flagdata";

type Props = {
  isoCode: string;
  showRandom?: boolean;
};

export function FlagCard({ ...props }: Props) {
  let isocode;
  let name;

  if (props.showRandom) {
    const foo = getRandomFlag();
    isocode = foo.isocode;
    name = foo.name;
  } else {
    isocode = props.isoCode;
    name = props.isoCode;
  }

  const fileName = `/flags/${isocode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={fileName} alt="Flag" />
      </figure>
      <div className="card-body">{`Hello I am a flag for ${name}`}</div>
    </div>
  );
}
