import { ReactNode } from "react";
import ContentContainer from "@/app/_components/common/ContentContainer/ContentContainer";
import Converter from "@/app/_components/Converter/Converter";

export default function ConverterSection(): ReactNode {
  return (
    <section className="py-24 bg-gray-bg">
      <ContentContainer>
        <div className="bg-white rounded p-16 flex flex-col gap-16">
          <h2 className="text-4xl font-bold">Конвертер валют</h2>
          <Converter />
        </div>
      </ContentContainer>
    </section>
  );
}
