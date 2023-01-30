import React from "react";

type Props = {
  choices: Object[];
};

export function OptionsCard({ ...props }: Props) {
  console.log("optionscard", props.choices);
  return (
    <>
      {props?.choices?.map((item) => (
        <button className="btn btn-wide">{item.name}</button>
      ))}
    </>
  );
}
