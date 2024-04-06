import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="container mx-auto lg:max-w-[940px] xl:max-w-[1036px] 2xl:max-w-[1420px]">
      {children}
    </div>
  );
}
