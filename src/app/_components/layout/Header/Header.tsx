import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/app/_components/common/LinksList/constants";
import LinksList from "@/app/_components/common/LinksList/LinksList";
import Logo from "@/app/_components/common/Logo/Logo";

export default function Header() {
  return (
    <header className="bg-gray-bg min-h-24 py-9">
      <div className="container mx-auto">
        <nav className="flex justify-between content-center">
          <Logo />
          <LinksList links={navLinks} />
          <Link
            aria-label="Перехід до особистого кабінету"
            href={"/personal-account"}
            className="flex gap-2 content-center"
          >
            <Image
              src="/icons/personal-account.svg"
              alt="personal-account icon"
              width={20}
              height={22}
            />
            <span>Особистий кабінет</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
