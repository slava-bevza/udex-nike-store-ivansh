import { SlidersHorizontal } from "lucide-react";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "~/shared/ui";
import { CategoryFiltering } from "./CategoryFiltering";
import { PriceFiltering } from "./PriceFiltering";
import { IProduct } from "~/shared/interfaces";
import { Link, useLocation } from "@remix-run/react";

interface Props {
  products: IProduct[];
}

export const MobileFiltering: React.FC<Props> = ({ products }) => {
  const { pathname } = useLocation();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="rounded-full flex gap-2 text-lg">
          <p>Filter</p>
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>Filter</DrawerHeader>
        <div className="flex flex-col w-full border px-4">
          <CategoryFiltering isMobile={true} products={products} />
          <PriceFiltering products={products} isMobile={true} />
        </div>
        <DrawerFooter>
          <div className="flex justify-between *:w-1/2 gap-4">
            <DrawerClose asChild>
              <Link to={pathname}>
                <Button variant="outline" className="rounded-full w-full">
                  Clear filters
                </Button>
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Button className="rounded-full">Apply</Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
