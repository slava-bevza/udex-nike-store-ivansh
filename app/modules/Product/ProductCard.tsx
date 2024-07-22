import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { IProduct } from "~/shared/interfaces/product";

interface Props {
  product: IProduct;
  isSmall?: boolean;
}

export const ProductCard: React.FC<Props> = ({ product, isSmall = false }) => {
  const link = `/products/${product.id}`;
  return (
    <motion.div
      className={cn(
        "flex flex-col",
        isSmall ? "max-w-48 sm:max-w-80" : "max-w-80"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to={link}>
        <img
          src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${product.thumbnail}`}
          alt={product.title}
          className="object-cover max-w-72 max-h-72 py-4"
        />
        <div className="flex justify-between">
          <h4 className="font-medium max-w-40 line-clamp-1 overflow-hidden overflow-ellipsis">
            {product.title}
          </h4>
          <p className="font-medium">${product.price.toLocaleString()}</p>
        </div>
        <p>{product.category}</p>
        <p>{product.sizes.length} Colors</p>
      </Link>
    </motion.div>
  );
};
