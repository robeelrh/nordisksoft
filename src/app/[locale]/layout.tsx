import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "./component/Navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    // notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <Navigation />
      <main className="min-h-screen">{children}</main>
    </NextIntlClientProvider>
  );
}
