import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import { ExchangeResponse } from "@/app/_components/Converter/types";
import { api } from "@/app/_utils/api";
import { AxiosResponse } from "axios";
import {
  FormData,
  FormDataKeys,
  SelectItems,
} from "@/app/_constants/conventerForm";
import { useForm } from "react-hook-form";
import convertDateToYYYYMMDD from "@/app/_utils/convertDateToYYYYMMDD";

export default function useConverter() {
  const [currencyData, setCurrencyData] = useState<ExchangeResponse[]>();

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const response: AxiosResponse =
        await api.get<ExchangeResponse[]>("/api/exchange?json");
      setCurrencyData(response.data);
    };

    void fetchCurrencyData();
  }, []);

  const currencyNamesList: SelectItems[] = useMemo(
    () =>
      currencyData
        ? currencyData.map((currency) => {
            return {
              value: currency.CurrencyCodeL,
              label: currency.CurrencyCodeL,
            };
          })
        : [
            {
              label: "",
              value: "",
            },
          ],
    [currencyData],
  );

  const initialDate: string = currencyData
    ? convertDateToYYYYMMDD(currencyData[0].StartDate)
    : "";
  const initialCodeL: string = currencyData
    ? currencyData[0].CurrencyCodeL
    : "";

  console.log(initialDate);

  const formValues: FormData = {
    sellCurrency: "",
    sellCurrencyCodeL: initialCodeL,
    buyCurrency: "",
    buyCurrencyCodeL: initialCodeL,
    date: initialDate,
  };

  const { watch, control, handleSubmit } = useForm<FormData>({
    values: formValues,
    defaultValues: formValues,
  });

  const sellNames: FormDataKeys[] = ["sellCurrency", "sellCurrencyCodeL"];
  const buyNames: FormDataKeys[] = ["buyCurrency", "buyCurrencyCodeL"];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return {
    currencyData,
    currencyNamesList,
    control,
    onSubmit: handleSubmit(onSubmit),
    sellNames,
    buyNames,
  };
}
