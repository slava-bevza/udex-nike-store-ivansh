import { Link } from "@remix-run/react";
import { Search, ShoppingBag, User } from "lucide-react";
import nike from "~/assets/images/nike.png";
import { NavSheet } from "./NavSheet";

export function NavMenu() {
  return (
    <div className="w-full flex px-8 py-4 justify-between items-center">
      <Link to="/">
        <img src={nike} alt="Nike" />
      </Link>
      <div className="flex gap-4 items-center ">
        <Link to="/search">
          <Search />
        </Link>
        <Link to="/account">
          <User />
        </Link>
        <Link to="cart">
          <ShoppingBag />
        </Link>
        <NavSheet />
      </div>
    </div>
  );
}
