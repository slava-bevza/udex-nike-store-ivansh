import React from "react";
import { CategoryFiltering } from "./CategoryFiltering";
import { PriceFiltering } from "./PriceFiltering";
import { IProduct } from "~/shared/interfaces";
import { motion } from "framer-motion";
import { Link, useLocation } from "@remix-run/react";

interface Props {
  allProducts: IProduct[];
}

export const Filtering: React.FC<Props> = ({ allProducts }) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="pl-4 pr-12 py-4 flex flex-col gap-4"
    >
      <div className="space-y-4 *:border-b">
        <CategoryFiltering products={allProducts} />
        <PriceFiltering products={allProducts} />
      </div>
      <Link className="text-xl font-medium" to={pathname}>
        Reset filters
      </Link>
    </motion.div>
  );
};
