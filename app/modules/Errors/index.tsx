import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert } from "lucide-react";
import { FC } from "react";
import { FieldErrors } from "react-hook-form";

type Errors = FieldErrors<{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}>;

interface Props {
  errors: Errors;
}

export const Errors: FC<Props> = ({ errors }) => {
  return (
    <AnimatePresence>
      {Object.keys(errors).length > 0 && (
        <motion.ul
          initial={{ opacity: 0, padding: 0, gap: 0 }}
          animate={{ opacity: 1, padding: "12px", gap: "12px" }}
          exit={{ opacity: 0, padding: 0, gap: 0 }}
          className="flex flex-col bg-[#f5f5f5]"
        >
          {Object.entries(errors).map(([field, error]) => (
            <motion.li
              initial={{ opacity: 0, gap: 0 }}
              animate={{ opacity: 1, gap: "8px" }}
              exit={{ opacity: 0, gap: 0 }}
              key={field}
              className="flex text-black font-medium"
            >
              <CircleAlert color="red" />
              <p>{error.message}</p>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
