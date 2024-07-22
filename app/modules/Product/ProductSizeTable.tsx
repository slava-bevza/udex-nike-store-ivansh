import { ISizeChart } from "~/shared/interfaces";
import { Table, TableBody, TableCell, TableRow } from "~/shared/ui";

interface Props {
  sizeChart: ISizeChart;
}

export const ProductSizeTable: React.FC<Props> = ({ sizeChart }) => {
  const names = Object.keys(sizeChart);

  return (
    <Table className="border border-l-0 p-4">
      <TableBody>
        {Object.values(sizeChart).map((row, index) => (
          <TableRow className="relative" key={index}>
            <TableCell className="sticky left-0 p-4 border-l bg-white">
              {names[index]}
            </TableCell>
            {row.map((col, j) => (
              <TableCell key={j}>{col}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
