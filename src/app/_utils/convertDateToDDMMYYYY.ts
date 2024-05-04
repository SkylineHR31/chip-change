export default function convertDateToDDMMYYYY(date: string) {
  return date.split("-").reverse().join(".");
}
