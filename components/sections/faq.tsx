import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = ["pricing", "privacy", "separated", "elderCare", "devices", "launch"] as const;

export function Faq() {
  const t = useTranslations("faq");

  return (
    <section className="border-t py-[clamp(1rem,5svh,6rem)]">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          {t("titlePrefix")} <span className="text-primary">{t("titleHighlight")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
          {t("description")}
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-left text-base">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
