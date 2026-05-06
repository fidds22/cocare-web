import { useTranslations } from "next-intl";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&h=400&q=80",
    key: "homework",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&h=400&q=80",
    key: "grandparent",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&h=400&q=80",
    key: "family",
  },
] as const;

export function PhotoBreak() {
  const t = useTranslations("photos");

  return (
    <section className="overflow-hidden" aria-label={t("aria")}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.key} className="aspect-[3/2] overflow-hidden">
            <img
              src={photo.src}
              alt={t(`alts.${photo.key}`)}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
