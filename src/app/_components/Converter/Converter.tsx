"use client";

import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import CurrencyField from "@/app/_components/common/CurrencyField/CurrencyField";
import DatePicker from "@/app/_components/common/DatePicker/DatePicker";
import Button from "@/app/_components/common/Button/Button";
import useConverter from "@/app/_components/Converter/useConverter";

const mockSelectData = [
  {
    value: "string",
    label: "string",
  },
  {
    value: "string1",
    label: "string1",
  },
  {
    value: "string2",
    label: "string2",
  },
  {
    value: "string3",
    label: "string3",
  },
];

export default function Converter(): ReactNode {
  const { currencyData, currencyNamesList } = useConverter();

  console.log(currencyData);

  // console.log(currencyData);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <form className="text-slate-500 grid grid-cols-12">
      <fieldset className="col-span-5 flex flex-col gap-6">
        <legend>В мене є:</legend>
        <CurrencyField items={currencyNamesList} />
        <DatePicker />
      </fieldset>
      <Image
        src="/icons/convert.svg"
        alt="іконка конвертації"
        width={22}
        height={22}
        className="col-span-2 justify-self-center mt-10"
      />
      <fieldset className="col-span-5 flex flex-col gap-6">
        <legend>Хочу придбати:</legend>
        <CurrencyField items={currencyNamesList} />
        <div className="self-end">
          <Button
            type="secondary"
            size="large"
            title="Зберегти результат"
            element="button"
            onClick={handleClick}
          />
        </div>
      </fieldset>
    </form>
  );
}
