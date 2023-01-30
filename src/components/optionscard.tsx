import React from "react";

type Props = {
  choices: Object[];
};

export function OptionsCard({ ...props }: Props) {
  console.log("optionscard", props.choices);
  return (
    <div className="grid grid-cols-2 gap-1">
      {props?.choices?.map((item) => (
        <button className="btn">{item.name}</button>
      ))}
    </div>
  );
}
