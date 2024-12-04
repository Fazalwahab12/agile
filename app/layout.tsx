import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";

const avgardd = localFont({
  src: "./fonts/Avgardd.ttf",
  variable: "--font-geist-avgardd",
  weight: "100 900",
});

const gothicbook = localFont({
  src: "./fonts/itc_avant_garde_gothic_book.ttf",
  variable: "--font-gothic-book",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    template: "%s | Agile IT Solutions",
    default: "Agile IT Solutions",
  },
  description: "Professional IT Infrastructure Solutions in UAE",
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${avgardd.variable} ${gothicbook.variable} antialiased`}
    >
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
