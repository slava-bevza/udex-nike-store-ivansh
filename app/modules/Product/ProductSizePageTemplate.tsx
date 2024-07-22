import React from "react";
import { ISizeChart } from "~/shared/interfaces";
import { ProductSizeTable } from "./ProductSizeTable";
import { ProductSizeTips } from "./ProductSizeTips";

interface Props {
  title: string;
  description: string;
  tableChart: ISizeChart;
  tipsTitle: string;
  tips: string[];
  children?: React.ReactNode;
  chartTitle?: string;
  additionalInfo?: React.ReactNode;
}

export const ProductSizePageTemplate: React.FC<Props> = ({
  title,
  description,
  tableChart,
  tipsTitle,
  tips,
  children,
  chartTitle,
  additionalInfo,
}) => {
  return (
    <div className="h-auto py-24 container max-w-[1140px] flex flex-col gap-16">
      <div className="space-y-8">
        <h2 className="text-3xl font-medium ">{title}</h2>
        <p className="font-medium">{description}</p>
        <p className="font-bold">Scroll horizontally to see more sizes.</p>
      </div>
      <div className="flex flex-col gap-16">
        <div className="space-y-6">
          <p className="text-3xl">{chartTitle || "Size Chart"}</p>
          <ProductSizeTable sizeChart={tableChart} />
        </div>
        {/* Children for additional tables */}
        {children}
      </div>
      <ProductSizeTips title={tipsTitle} tips={tips} />
      {additionalInfo}
    </div>
  );
};
