import { ReactNode } from "react";

interface SelectProps {
  items: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: () => void;
}

export default function Select({
  items,
  value,
  onChange,
}: SelectProps): ReactNode {
  return (
    <select
      value={value}
      onChange={onChange}
      className="min-h-14 text-center outline-0 border-2 rounded pl-6 pr-16 appearance-none bg-chevron bg-80 bg-no-repeat cursor-pointer"
    >
      {items.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
