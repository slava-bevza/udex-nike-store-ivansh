import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export const CheckBox: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...props }) => {
  return (
    <input
      className="accent-black border-red-500 h-5 w-5"
      type="checkbox"
      {...props}
    />
  );
};
