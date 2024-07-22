import { Link, useLocation } from "@remix-run/react";
import { Heart, ShoppingBag } from "lucide-react";
import nike from "~/assets/images/nike.png";
import { clothesLinks } from "~/shared/data";
import { NavSearchInput } from "../Search";
import { NavHeader } from "./NavHeader";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col w-full ">
      <NavHeader />
      <div className="flex w-full items-center justify-between px-8 gap-8 py-4">
        <Link to="/">
          <img src={nike} alt="Nike" />
        </Link>
        <ul className="flex-grow flex gap-4 font-medium flex-nowrap text-nowrap">
          {clothesLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          {pathname !== "/search" && <NavSearchInput />}
          <Link to="/wishlist">
            <Heart className="cursor-pointer w-6 h-6" />
          </Link>
          <Link to="/cart">
            <ShoppingBag className="cursor-pointer w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
