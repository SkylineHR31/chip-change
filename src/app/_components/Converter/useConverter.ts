import { useEffect, useMemo, useState } from "react";
import { ExchangeResponse } from "@/app/_components/Converter/types";
import { api } from "@/app/_utils/api";
import { AxiosResponse } from "axios";
import { FormData, SelectItems } from "@/app/_constants/conventerForm";
import { useForm } from "react-hook-form";

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

  const initialDate: string = currencyData ? currencyData[0].StartDate : "";

  const methods = useForm<FormData>({
    values: {
      sellCurrency: "",
      sellCurrencyCodeL: "",
      buyCurrency: "",
      buyCurrencyCodeL: "",
      date: initialDate,
    },
  });

  return {
    currencyData,
    currencyNamesList,
    methods,
  };
}
