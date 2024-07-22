import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fromStringToArray(str: string) {
  return str.length > 0 ? str.split(";") : [];
}

export function fromArrayToString(arr: string[]) {
  return arr.join(";");
}

export function getSizeLink(category: string) {
  const sizeLinks: { [key: string]: string } = {
    Men: "/sneakers/size-guide/men",
    Women: "/sneakers/size-guide/women",
    Kid: "/sneakers/size-guide/kids",
  };
  const formattedSize = category
    .slice(0, category.indexOf("s"))
    .replace("'", "");

  // Men's shoes -> "Men"
  return sizeLinks[formattedSize];
}
