import { ReactNode } from "react";
import Input from "@/app/_components/common/Input/Input";
import Select from "@/app/_components/common/Select/Select";
import { FormDataKeys, SelectItems } from "@/app/_constants/conventerForm";
import { Control, Controller } from "react-hook-form";
import { FormData } from "@/app/_constants/conventerForm";

interface CurrencyFieldProps {
  items: SelectItems[];
  control: Control<FormData>;
  names: FormDataKeys[];
}

export default function CurrencyField({
  items,
  control,
  names,
}: CurrencyFieldProps): ReactNode {
  return (
    <div className="flex lg:gap-4 lg:justify-between xl:justify-start xl:gap-8">
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChange={onChange} value={value} />
        )}
        name={names[0]}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} items={items} />
        )}
        name={names[1]}
      />
    </div>
  );
}
