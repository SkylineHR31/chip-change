import LinksList from "@/app/_components/common/LinksList/LinksList";
import { navLinks } from "@/app/_components/common/LinksList/constants";
import Logo from "@/app/_components/common/Logo/Logo";
import PhoneComponent from "@/app/_components/common/PhoneComponent/PhoneComponent";

export default function Footer() {
  return (
    <footer className="bg-gray-bg min-h-24 py-14 text-slate-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-5">
          <div className="flex flex-col gap-5">
            <Logo />
            <div>
              <address className="not-italic text-xs">
                04128, м.Київ, вул. Хрещатик, 19
              </address>
              <div className="flex flex-col text-xs">
                <span>Ліцензія НБУ №156</span>
                <span>Ⓒ ПАТ ЧіпЧендж, 2019-2023</span>
              </div>
            </div>
          </div>
          <LinksList flow="column" links={navLinks} />
          <PhoneComponent
            number="3773"
            title="Цілодобова підтримка"
            iconPath="icons/smartphone.svg"
          />
          <PhoneComponent
            number="8 800 111 22 33"
            title="Безкожтовно для дзвінків в межах України"
            iconPath="icons/regular-phone.svg"
          />
          <div className="f"></div>
          <div className="f"></div>
        </div>
      </div>
    </footer>
  );
}
