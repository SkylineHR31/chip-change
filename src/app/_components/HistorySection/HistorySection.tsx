import { ReactNode } from "react";
import ContentContainer from "@/app/_components/common/ContentContainer/ContentContainer";
import Button from "@/app/_components/common/Button/Button";

export default function HistorySection(): ReactNode {
  return (
    <section className="py-24 bg-white">
      <ContentContainer>
        <div className="bg-gray-bg rounded flex flex-col p-12 gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Історія конвертації</h2>
            <Button
              type="secondary"
              size="large"
              title="Очистити історію"
              element="button"
            />
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </ContentContainer>
    </section>
  );
}
