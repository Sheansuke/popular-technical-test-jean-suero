import React, { FC } from "react";

interface InputRadioProps {
 value: string;
 label: string
 rest: any
}

export const InputRadio: FC<InputRadioProps> = ({value, label, rest }) => {
  return (
    <div className="flex mt-2">
      <input {...rest} type="radio" className="radio radio-secondary mr-1"  value={value} /> <span>{label ?? ""}</span>
    </div>
  );
};
