import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn("text-xl font-bold max-w-44 text-center", className)}
      {...props}
    >
      {children}
    </h2>
  );
};
