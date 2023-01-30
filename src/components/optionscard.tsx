import React from "react";

type Props = {
  choices: Object[];
};

export function OptionsCard({ ...props }: Props) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {props?.choices?.map((item) => (
        <button key={`btn_${item.isocode}`} className="btn">
          {item.name}
        </button>
      ))}
    </div>
  );
}
