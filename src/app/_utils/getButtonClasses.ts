export default function getButtonClasses(
  type: "primary" | "secondary",
  size: "default" | "large",
): string {
  let classes: string[] = [
    "px-9",
    "inline-flex",
    "rounded",
    "self-start",
    "items-center",
    "justify-center",
    "font-medium",
    "cursor-pointer",
    "text-lg",
  ];

  if (type === "primary") {
    classes.push(...["bg-gray-bg", "text-slate-500"]);
  } else if (type === "secondary") {
    classes.push(...["bg-blue-700", "text-gray-bg"]);
  }

  if (size === "default") {
    classes.push(...["min-h-[54px]"]);
  } else if (size === "large") {
    classes.push(...["min-h-[60px]"]);
  }

  return classes.join(" ");
}
