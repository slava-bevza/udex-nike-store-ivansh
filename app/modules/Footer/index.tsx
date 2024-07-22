import { Link } from "@remix-run/react";
import { MapPin } from "lucide-react";
import {
  aboutLinks,
  clothesLinks,
  profileLinks,
  socialLinks,
  termsLinks,
} from "~/shared/data";
import { FooterAccordion } from "./FooterAccordion";
import { FooterList } from "./FooterList";

const lists = [
  {
    heading: "Clothes",
    links: clothesLinks,
  },
  {
    heading: "Profile",
    links: profileLinks,
  },
  {
    heading: "About Us",
    links: aboutLinks,
  },
];

export function Footer() {
  return (
    <div className="flex flex-col sticky top-[100vh] w-full bg-[#111111] text-white h-auto py-8 px-12">
      <div className="flex flex-col lg:flex-row items-baseline justify-between gap-8">
        <div className="lg:hidden w-full">
          <FooterAccordion lists={lists} />
        </div>
        <div className="gap-24 hidden lg:flex">
          {lists.map((list) => (
            <FooterList key={list.heading} {...list} />
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <img src={link.src} alt={link.alt} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 w-full flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="flex gap-8 items-center">
          <div className="flex gap-4">
            <MapPin />
            <p>India</p>
          </div>
          <p className="text-[#7E7E7E]">
            © 2024 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {termsLinks.map((link) => (
            <Link
              className="text-[#7E7E7E] hover:text-white transition-colors leading-7"
              to={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
