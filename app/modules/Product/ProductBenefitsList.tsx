import React from "react";
import { fromStringToArray } from "~/lib/utils";

interface Props {
  title: string;
  details: string;
}

export const ProductBenefitsList: React.FC<Props> = ({ title, details }) => {
  const detailsArr = fromStringToArray(details);

  return (
    detailsArr.length > 0 && (
      <div className="space-y-1">
        <h4 className="font-medium">{title}</h4>
        <ul className="space-y-2">
          {detailsArr.map((detail) => (
            <li className="list-disc" key={detail}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
