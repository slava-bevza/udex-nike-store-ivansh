import { useNavigate, useSearchParams } from "@remix-run/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { formatQuery } from "~/lib/formatQuery";
import { Input } from "~/shared/ui";

export const NavSearchInput = () => {
  const searchParams = useSearchParams()[0];
  const query = searchParams.get("q") || "";

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
    <form onSubmit={onSubmit}>
      <Input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search.."
        name="q"
      />
    </form>
  );
};
