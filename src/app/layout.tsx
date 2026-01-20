import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { ToasterProvider } from "@/providers/toaster-provider";
import Navigation from "./[locale]/component/Navbar";

import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../fonts/Geist[wght].woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export const geistMono = localFont({
  src: "../fonts/GeistMono[wght].woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nordisk Soft",
  description: "From software development to digital strategy, we deliver scalable and secure services tailored to your needs.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/x-icon" }
    ]
  }
};

export default async function RootLayout({
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

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} className="overflow-y-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider locale={locale}>
          <Navigation />

          <main className=" min-h-screen ">{children}</main>
        </NextIntlClientProvider>

        <ToasterProvider />
      </body>
    </html>
  );
}
