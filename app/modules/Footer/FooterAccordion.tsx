import { Link } from "@remix-run/react";
import React from "react";
import { IList } from "~/shared/interfaces";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shared/ui/accordion";

interface Props {
  lists: IList[];
}

export const FooterAccordion: React.FC<Props> = ({ lists }) => {
  return (
    <Accordion type="single" className="w-full" collapsible>
      {lists.map((list, index) => (
        <AccordionItem className="" key={list.heading} value={`list-${index}`}>
          <AccordionTrigger>{list.heading}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {list.links.map((link) => (
              <Link to={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
