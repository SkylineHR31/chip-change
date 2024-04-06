import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link aria-label="Перехід на головну сторінку" href={"/"}>
      <Image src="/logo.svg" alt="logo" width={147} height={23} />
    </Link>
  );
}
