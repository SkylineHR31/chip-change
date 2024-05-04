import { ReactNode } from "react";

interface InputProps {
  value: string;
  onChange: () => void;
}

export default function Input({ value, onChange }: InputProps): ReactNode {
  return (
    <input
      placeholder="Введіть значення"
      className="min-h-14 text-center outline-0 border-2 rounded"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
