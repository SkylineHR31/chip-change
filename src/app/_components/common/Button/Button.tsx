import Link from "next/link";
import getButtonClasses from "@/app/_utils/getButtonClasses";

interface ButtonProps {
  type: "primary" | "secondary";
  size: "default" | "large";
  title: string;
  element: "anchor" | "button";
  path?: string;
  onClick?: () => void;
}

export default function Button({
  type,
  size,
  title,
  element,
  onClick,
  path = "",
}: ButtonProps) {
  const classes = getButtonClasses(type, size);

  if (element === "anchor") {
    return (
      <Link className={classes} href={path}>
        {title}
      </Link>
    );
  } else if (element === "button") {
    return (
      <button className={classes} onClick={onClick}>
        {title}
      </button>
    );
  }
}
