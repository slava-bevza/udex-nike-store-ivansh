import React from "react";

interface Props {
  title: string;
  tips: string[];
}

export const ProductSizeTips: React.FC<Props> = ({ tips, title }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-medium">{title}</h4>
      <ul className="space-y-6 px-4">
        {tips.map((tip) => (
          <li className="leading-8 list-decimal max-w-[530px]" key={tip}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};
