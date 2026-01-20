import type { Metadata } from "next";
import "./globals.css";
import { ToasterProvider } from "@/providers/toaster-provider";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/Geist[wght].woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/GeistMono[wght].woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nordisk Soft",
  description:
    "From software development to digital strategy, we deliver scalable and secure services tailored to your needs.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-y-scroll">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
