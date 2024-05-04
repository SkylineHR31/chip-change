interface CalculateCurrency {
  valueFrom: string;
  currentUAHCostFrom: string;
  currentUAHCostTo: string;
}

export default function calculateCurrency({
  valueFrom,
  currentUAHCostFrom,
  currentUAHCostTo,
}: CalculateCurrency): string {
  if (isNaN(+valueFrom) || isNaN(+currentUAHCostFrom) || isNaN(+currentUAHCostTo)) return "0";

  return String(
    ((+valueFrom * +currentUAHCostFrom) / +currentUAHCostTo).toFixed(2),
  );
}
