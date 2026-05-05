import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Fraunces } from "next/font/google";
import { locales } from "@/i18n/request";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`landing-typography ${fraunces.variable}`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
