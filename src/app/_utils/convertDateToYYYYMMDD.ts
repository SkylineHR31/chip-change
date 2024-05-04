export default function convertDateToYYYYMMDD(date: string) {
  return date.split(".").reverse().join("-");
}
