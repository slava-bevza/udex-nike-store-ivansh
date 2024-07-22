import { Link } from "@remix-run/react";
import { Menu, Package, ShoppingBag, Store } from "lucide-react";
import { clothesLinks } from "~/shared/data";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "~/shared/ui";

const footerLinks = [
  {
    label: "Bag",
    href: "/cart",
    icon: <ShoppingBag />,
  },
  {
    label: "Orders",
    href: "/manage-orders",
    icon: <Package />,
  },
  {
    label: "Find a store",
    href: "/stores",
    icon: <Store />,
  },
];

export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col py-8 gap-16 h-full relative">
          <ul className="flex flex-col gap-4">
            {clothesLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-xl text-slate-950 ">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col text-[#8D8D8D] text-center">
            <div>
              <p>Become a Nike Member for the best products</p>
              <p className="hidden sm:block">
                , inspiration and stories in sport.
              </p>
            </div>

            <div className="flex justify-center gap-6 py-4 ">
              <Link to="/sign-up">
                <Button className="rounded-full hover:bg-slate-900 hover:text-slate-100">
                  Join Us
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button className="rounded-full bg-white text-black border border-black hover:underline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <SheetFooter>
            <ul className="flex flex-col w-full gap-4 justify-center absolute bottom-10">
              {footerLinks.map((link) => (
                <li className="flex gap-2" key={link.href}>
                  {link.icon}
                  <Link className="font-medium" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
