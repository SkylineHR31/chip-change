import Link from "next/link";
import Image from "next/image";

interface PhoneComponentProps {
  number: string;
  title: string;
  iconPath: string;
}

export default function PhoneComponent({
  number,
  title,
  iconPath,
}: PhoneComponentProps) {
  return (
    <div className="flex flex-col gap-1 pl-10 max-w-[190px] relative">
      <Image
        className="absolute top-1 left-1"
        src={iconPath}
        alt={"Іконка телефону"}
        width={0}
        height={0}
        aria-hidden
        style={{ width: "initial", height: "initial" }}
      />
      <Link
        className="font-semibold text-slate-950"
        href={`tel:${number.replace(/\s/g, "")}`}
      >
        {number}
      </Link>
      <span className="text-xs">{title}</span>
    </div>
  );
}
