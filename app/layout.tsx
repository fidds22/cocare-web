import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "coCare — Family coordination, simplified",
  description:
    "Shared calendar, messaging, documents, and care details for families, caregivers, and separated parents. All in one place.",
  metadataBase: new URL("https://cocare-web.vercel.app"),
  openGraph: {
    title: "coCare — Family coordination, simplified",
    description:
      "Shared calendar, messaging, documents, and care details for families and caregivers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "coCare — Family coordination, simplified",
    description:
      "Shared calendar, messaging, documents, and care details for families and caregivers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
