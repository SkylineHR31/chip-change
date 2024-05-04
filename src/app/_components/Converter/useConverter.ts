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
import calculateCurrency from "@/app/_utils/calculateCurrency";

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
  const initialAmount: string = currencyData
    ? String(currencyData[0].Amount)
    : "";

  const formValues: FormData = {
    sellCurrency: "",
    sellCurrencyCodeL: initialCodeL,
    buyCurrency: "",
    buyCurrencyCodeL: initialCodeL,
    date: initialDate,
    sellAmount: initialAmount,
    buyAmount: initialAmount,
  };

  const { watch, control, handleSubmit, setValue } = useForm<FormData>({
    values: formValues,
    defaultValues: formValues,
  });

  const sellNames: FormDataKeys[] = ["sellCurrency", "sellCurrencyCodeL"];
  const buyNames: FormDataKeys[] = ["buyCurrency", "buyCurrencyCodeL"];

  const watchBuyCodeL = watch("buyCurrencyCodeL");
  const watchSellCodeL = watch("sellCurrencyCodeL");
  const watchSellCurrency = watch("sellCurrency");
  const watchBuyCurrency = watch("buyCurrency");

  function calculateValue(type: "buy" | "sell") {
    const watchBuyAmount = watch("buyAmount");
    const watchSellAmount = watch("sellAmount");

    setValue(
      type === "buy" ? "buyAmount" : "sellAmount",
      String(
        currencyData?.find((item) => item.CurrencyCodeL === watchBuyCodeL)
          ?.Amount,
      ) ?? "",
    );
    setValue(
      type === "buy" ? "sellCurrency" : "buyCurrency",
      type === "buy"
        ? calculateCurrency({
            valueFrom: watchBuyCurrency,
            currentUAHCostFrom: watchBuyAmount,
            currentUAHCostTo: watchSellAmount,
          })
        : calculateCurrency({
            valueFrom: watchSellCurrency,
            currentUAHCostFrom: watchSellAmount,
            currentUAHCostTo: watchBuyAmount,
          }),
    );
  }

  useEffect(() => {
    calculateValue("buy");
  }, [
    watchBuyCodeL,
    currencyData,
    setValue,
    watchBuyCurrency,
    watch,
  ]);

  useEffect(() => {
    calculateValue("sell");
  }, [
    watchSellCodeL,
    currencyData,
    setValue,
    watch,
    watchSellCurrency,
  ]);

  console.log(watchBuyCodeL, watchSellCodeL);

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
