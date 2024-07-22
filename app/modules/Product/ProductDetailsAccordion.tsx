import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shared/ui/accordion";

export const ProductDetailsAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="shipping">
        <AccordionTrigger className="font-medium text-2xl">
          Shipping and returns
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Free standard shipping on orders $50+ and free 60-day returns for
            Nike Members.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
