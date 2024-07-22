import React from "react";
import { IProduct } from "../interfaces";
import { ProductCard } from "~/modules";
import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

interface Props {
  products: IProduct[];
}

export const ProductsGrid: React.FC<Props> = ({ products }) => {
  const { pathname } = useLocation();
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center justify-center gap-48"
      >
        <iframe
          className="w-48 h-48 sm:w-64 sm:h-64"
          src="https://lottie.host/embed/19a3f2d8-f17a-4a48-902a-c6ded06e29ab/KAJGn24suY.json"
        />
        <div className="space-y-2">
          <h2 className="text-center text-4xl sm:text-6xl font-medium">
            Oops!
          </h2>
          <p className="text-center text-2xl sm:text-3xl">
            We could not found products by this filters. Try{" "}
            <Link className="underline underline-offset-4" to={pathname}>
              resetting them
            </Link>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-border min-h-screen grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
      {products.map((product) => (
        <ProductCard isSmall={true} key={product.id} product={product} />
      ))}
    </div>
  );
};
