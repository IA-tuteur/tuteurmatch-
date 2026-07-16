import { HeroSection } from "@/components/HeroSection";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { GuaranteeBanner } from "@/components/GuaranteeBanner";
import { CalendarEmbed } from "@/components/CalendarEmbed";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoTestimonials />
      <GuaranteeBanner />
      <CalendarEmbed />
    </main>
  );
}
