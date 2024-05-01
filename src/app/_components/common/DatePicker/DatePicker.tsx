import { ReactNode } from "react";
import Image from "next/image";

// interface DatePickerProps {
//     value: string;
// }

export default function DatePicker(): ReactNode {
  return (
    <div className="relative max-w-[186px] border-2 rounded">
      <input
        // value={'01.05.2024'}
        type="date"
        className="
        appearance-none
        bg-transparent
        border-none w-full
        text-gray-700
        mr-3
        py-1
        px-2
        leading-tight
        min-h-14
        text-center
        outline-0
        "
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
