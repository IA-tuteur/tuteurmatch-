import { HeroSection } from "@/components/HeroSection";
import { GuaranteeBanner } from "@/components/GuaranteeBanner";
import { CalendarEmbed } from "@/components/CalendarEmbed";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GuaranteeBanner />
      <CalendarEmbed />
    </main>
  );
}
