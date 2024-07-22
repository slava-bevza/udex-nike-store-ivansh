import { ILink } from "../interfaces";
import facebook from "~/assets/icons/facebook.svg";
import instagram from "~/assets/icons/insta.svg";
import twitter from "~/assets/icons/twitter.svg";
import youtube from "~/assets/icons/youtube.svg";

export const clothesLinks: ILink[] = [
  {
    label: "New & Featured",
    href: "/new",
  },
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Women",
    href: "/women",
  },
  {
    label: "Kids",
    href: "/kids",
  },
  {
    label: "Sale",
    href: "/sale",
  },
  {
    label: "SNKRS",
    href: "/snkrs",
  },
];

export const profileLinks: ILink[] = [
  {
    label: "Find a store",
    href: "/stores",
  },
  {
    label: "Join Us",
    href: "/sign-up",
  },
  {
    label: "Sign In",
    href: "/sign-in",
  },
];

export const termsLinks: ILink[] = [
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "Terms of Sale",
    href: "/terms-of-sale",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    label: "Nike Privacy Policy",
    href: "/privacy-policy",
  },
];

export const aboutLinks: ILink[] = [
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Investors",
    href: "/investors",
  },
  {
    label: "Sustainability",
    href: "/sustainability",
  },
];

export const socialLinks = [
  {
    src: twitter,
    alt: "Twitter",
    href: "https://twitter.com/nike",
  },
  {
    src: facebook,
    alt: "Facebook",
    href: "https://facebook.com/nike",
  },
  {
    src: youtube,
    alt: "Youtube",
    href: "https://youtube.com/nike",
  },
  {
    src: instagram,
    alt: "Instagram",
    href: "https://instagram.com/nike",
  },
];
