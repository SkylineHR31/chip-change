import { ReactNode } from "react";

export default function Input(): ReactNode {
  return (
    <input
      placeholder="Введіть значення"
      className="min-h-14 text-center outline-0 border-2 rounded"
      type="text"
    />
  );
}
