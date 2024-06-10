import Heading from "@/app/_components/Heading/Heading";
import { MaxWidth } from "@/app/_components/MaxWidth/MaxWidth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqData } from "@/app/_constants";

const Faq = () => {
  return (
    <MaxWidth>
      <div className="main-container">
        <Heading
          title="Frequently Asked Questions"
          description="Below are some of the most commonly posed inquiries regarding our task management solution."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqData.map(({ id, answer, question }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MaxWidth>
  );
};

export default Faq;
