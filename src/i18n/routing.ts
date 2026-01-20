import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["no", "en", "de"],

  // Always use "no" as the default and
  // ignore the browser's preferred language,
  // so the website opens in Norwegian first.
  defaultLocale: "no",
  localeDetection: false,
});
