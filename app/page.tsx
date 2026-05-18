import { Navigation } from "@/components/landing/navigation";
import { CountdownBanner } from "@/components/landing/countdown-banner";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Platform } from "@/components/landing/platform";
import { Roadmap } from "@/components/landing/roadmap";
import { WhySaudi } from "@/components/landing/why-saudi";
import { MarketProof } from "@/components/landing/market-proof";
import { Finance } from "@/components/landing/finance";
import { Revenue } from "@/components/landing/revenue";
import { Compliance } from "@/components/landing/compliance";
import { Products } from "@/components/landing/products";
import { Positioning } from "@/components/landing/positioning";
import { DataMoat } from "@/components/landing/data-moat";
import { Traction } from "@/components/landing/traction";
import { ESG } from "@/components/landing/esg";
import { Team } from "@/components/landing/team";
import { Fundraising } from "@/components/landing/fundraising";
import { Access } from "@/components/landing/access";
import { Thesis } from "@/components/landing/thesis";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CountdownBanner />
      <Hero />
      <Problem />
      <Platform />
      <Roadmap />
      <WhySaudi />
      <MarketProof />
      <Finance />
      <Revenue />
      <Compliance />
      <Products />
      <Positioning />
      <DataMoat />
      <Traction />
      <ESG />
      <Team />
      <Fundraising />
      <Access />
      <Thesis />
      <Footer />
    </main>
  );
}
