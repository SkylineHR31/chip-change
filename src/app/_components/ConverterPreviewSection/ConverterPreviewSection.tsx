import ContentContainer from "@/app/_components/common/ContentContainer/ContentContainer";
import Image from "next/image";
import Button from "@/app/_components/common/Button/Button";

export default function ConverterPreviewSection() {
  return (
    <section className={"py-32"}>
      <ContentContainer>
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-5 max-w-[400px]">
            <h2 className="font-bold text-4xl">Конвертер валют</h2>
            <p className="text-slate-500 text-xl">
              Переважна діяльність банківської групи за останні чотири звітні
              квартали становить 50 і більше відсотків.
            </p>
            <Button
              type={"secondary"}
              size={"large"}
              title={"Конвертувати валюту"}
              element={"anchor"}
              path={"/converter"}
            />
          </div>
          <div className="flex justify-end">
            <Image
              src={"/black-card.png"}
              alt={"Кредитна картка"}
              width={436}
              height={314}
            />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
