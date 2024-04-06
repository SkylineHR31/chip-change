import ContentContainer from "@/app/_components/common/ContentContainer/ContentContainer";
import Image from "next/image";
import Button from "@/app/_components/common/Button/Button";

export default function HeroSection() {
  return (
    <section className="bg-hero-section bg-no-repeat bg-cover min-h-[400px] py-[85px]">
      <ContentContainer>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-bg text-6xl">Чіп Чендж</h1>
            <span className="text-slate-300 mb-3 text-xl font-medium">
              Обмінник валют - навчальний
            </span>
            <Button
              type={"primary"}
              size={"default"}
              title={"Конвертер валют"}
              element={"anchor"}
              path={"/converter"}
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="/mastercard-card.png"
              alt="Картинка кредитної картки"
              width={341}
              height={216}
            />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
