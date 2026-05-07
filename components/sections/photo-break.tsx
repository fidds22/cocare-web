import { useTranslations } from "next-intl";

const photos = [
  {
    src: "https://images.pexels.com/photos/4474048/pexels-photo-4474048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    key: "homework",
  },
  {
    src: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    key: "grandparent",
  },
  {
    src: "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
