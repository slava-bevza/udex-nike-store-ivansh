import { useSearchParams, useNavigate, Link } from "@remix-run/react";
import { Search } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { formatQuery } from "~/lib/formatQuery";
import { Button, Input } from "~/shared/ui";

export const suggestions = [
  {
    label: "Air Jordan",
    href: "jordan",
  },
  {
    label: "Nike Dunk",
    href: "dunk",
  },
  {
    label: "Air Max",
    href: "air max",
  },
];

export const MobileSearchInput = () => {
  const searchParams = useSearchParams()[0];
  const query = searchParams.get("q") || "";
  const searchBaseUrl = "/products/search?q=";

  const [searchQuery, setSearchQuery] = useState(query);
  const navigate = useNavigate();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formattedQuery = formatQuery(searchQuery);
    event.preventDefault();
    navigate(`/products/search?q=${formattedQuery}`);
  };

  useEffect(() => {
    setSearchQuery(formatQuery(query));
  }, [query]);

  return (
    <div className="flex flex-col gap-8 w-full">
      <form onSubmit={onSubmit} className="flex w-full">
        <Input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="rounded-md rounded-r-none"
          placeholder="Nike Air Force..."
        />
        <Button className="py-6 rounded-md rounded-l-none">
          <Search />
        </Button>
      </form>
      <div className="flex flex-col items-center">
        <p>Suggested:</p>
        {suggestions.map((suggestion) => (
          <Link
            className="text-zinc-500 underline-offset-4 hover:text-black hover:underline"
            key={suggestion.href}
            to={`${searchBaseUrl}${suggestion.href}`}
          >
            {suggestion.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
