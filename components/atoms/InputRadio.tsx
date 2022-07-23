import React, { FC } from "react";

interface InputRadioProps {
 value: string;
 label: string
 rest: any
}

export const InputRadio: FC<InputRadioProps> = ({value, label, rest }) => {
  return (
    <div>
      <input {...rest} type="radio" value={value} /> <span>{label ?? ""}</span>
    </div>
  );
};
