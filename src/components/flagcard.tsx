import React from "react";

type Props = {
  isoCode: string;
  name: string;
};

export function FlagCard({ ...props }: Props) {
  const fileName = `/flags/${props.isoCode.toUpperCase()}-flag.jpg`;
  return (
    <div className="mx-auto card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={fileName} alt="Flag" />
      </figure>
      <div className="card-body">
        <span className="font-bold">{`${props.name}`}</span>
      </div>
    </div>
  );
}
