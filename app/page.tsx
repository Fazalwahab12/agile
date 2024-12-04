import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import TechLogos from "@/components/TechLogos";
import ProcessFlow from "@/components/ProcessFlow";

export const metadata: Metadata = {
  title: "Agile - IT Infrastructure Solutions in UAE",
  description:
    "Providing 360° Solutions For IT Infrastructure Support Anywhere in UAE. Expert IT services, consulting, and support for businesses.",
  keywords:
    "IT Infrastructure, UAE IT Solutions, IT Support, Technology Services",
  openGraph: {
    title: "Agile - IT Infrastructure Solutions in UAE",
    description:
      "Providing 360° Solutions For IT Infrastructure Support Anywhere in UAE",
    type: "website",
    locale: "en_AE",
    url: "https://yourdomain.com",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white antialiased">
        <Hero />
      </main>
      <TechLogos />
      <ProcessFlow />
    </>
  );
}
