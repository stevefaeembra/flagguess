import React from "react";
import Card from "";

type Props = {
  isoCode: string;
};

export function FlagCard({ ...props }: Props) {
  const fileName = `/flags/${props.isoCode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={fileName} alt="Flag" />
      </figure>
      <div className="card-body">{`Hello I am a flag for ${props.isoCode}`}</div>
    </div>
  );
}
