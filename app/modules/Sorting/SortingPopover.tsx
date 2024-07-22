import { Link } from "@remix-run/react";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "~/shared/ui/popover";

const sortOptions = [
  {
    label: "Price: High-Low",
    href: "",
  },
  {
    label: "Price: Low-High",
    href: "",
  },
];

export const SortingPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center">
          Sort by
          <ChevronDown className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[150px] px-0 border-none">
        <div className="flex flex-col items-center">
          {sortOptions.map((option) => (
            <Link
              className="hover:text-zinc-600 text-center"
              key={option.label}
              to={option.href}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
