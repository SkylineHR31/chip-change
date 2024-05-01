import { ReactNode } from "react";
import Input from "@/app/_components/common/Input/Input";
import Select from "@/app/_components/common/Select/Select";
import { SelectItems } from "@/app/_constants/conventerForm";

interface CurrencyFieldProps {
  items: SelectItems[];
}

export default function CurrencyField({
  items,
}: CurrencyFieldProps): ReactNode {
  return (
    <div className="flex lg:gap-4 lg:justify-between xl:justify-start xl:gap-8">
      <Input />
      <Select items={items} />
    </div>
  );
}
