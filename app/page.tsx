import { Navigation } from "@/components/landing/navigation";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Platform } from "@/components/landing/platform";
import { WhySaudi } from "@/components/landing/why-saudi";
import { Finance } from "@/components/landing/finance";
import { Compliance } from "@/components/landing/compliance";
import { Products } from "@/components/landing/products";
import { Positioning } from "@/components/landing/positioning";
import { DataMoat } from "@/components/landing/data-moat";
import { Thesis } from "@/components/landing/thesis";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Platform />
      <WhySaudi />
      <Finance />
      <Compliance />
      <Products />
      <Positioning />
      <DataMoat />
      <Thesis />
      <Footer />
    </main>
  );
}
