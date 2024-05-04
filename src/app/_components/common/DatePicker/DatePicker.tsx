import { ReactNode } from "react";
import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import { FormData, FormDataKeys } from "@/app/_constants/conventerForm";

interface DatePickerProps {
  control: Control<FormData>;
  name: FormDataKeys;
}

export default function DatePicker({
  control,
  name,
}: DatePickerProps): ReactNode {
  return (
    <div className="relative max-w-[186px] border-2 rounded">
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <input
            onChange={onChange}
            value={value}
            type="date"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight min-h-14 text-center outline-0"
          />
        )}
        name={name}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-white">
        <Image
          className="fill-current h-4 w-4 text-gray-500"
          src="/icons/calendar.svg"
          alt="calendar"
          aria-hidden
          width={25}
          height={28}
        />
      </div>
    </div>
  );
}
