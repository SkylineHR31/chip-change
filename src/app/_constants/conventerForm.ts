export interface SelectItems {
  value: string;
  label: string;
}

export interface FormData {
  sellCurrency: string;
  sellCurrencyCodeL: string;
  buyCurrency: string;
  buyCurrencyCodeL: string;
  sellAmount: string;
  buyAmount: string;
  date: string;
}

export type FormDataKeys = keyof FormData;
